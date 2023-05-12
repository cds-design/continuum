import { readFile, writeFile } from "node:fs/promises";

type Member = {
    name: string,
    kind: "method" | "field" | "event",
    description: string,
    attribute: string,
    default: string,
    privacy?: "private",
    type: {
        text: string,
    }
}

type Declaration = {
    name: string,
    description: string,
    members: Member[]
}

function addSlashes(str: string) {
    return (str).replace(/[\\|]/g, '\\$&').replace(/\u0000/g, '\\0');
}


function generateMarkdown(component: Declaration) {

    const attributes = component.members
        .filter((member) => member.kind === "field")
        .filter((member) => member.privacy !== "private")

    const methods = component.members
        .filter((member) => member.kind === "method")
        .filter((member) => member.privacy !== "private")

    const events = component.members
        .filter((member) => member.kind === "event")
        .filter((member) => member.privacy !== "private")

    return `# ${component.name}

${component.description}

## Properties

| Property | Attribute | Description | Type | Default |
| -------- | --------- | ----------- | ---- | ------- |
${attributes.map((member) => {
        return `| ${member.name}<sup>${member.default === undefined ? "*" : ""}</sup> | ${member.attribute} | ${member.description?.replace("\n", " ")} | \`${addSlashes(member.type.text)}\` | ${member.default === undefined ? "__*required__" : `\`${member.default}\``} |`
    }).join("\n")}

${methods.length > 0 ? `## Methods

| Method | Description |
| ------ | ----------- |
${methods.map((member) => {
        return `| ${member.name} | ${member.description?.replace("\n", " ")} |`
    }).join("\n")}`
            : ""}

${events.length > 0 ? `## Events

| Event | Description |
| ----- | ----------- |
${events.map((member) => {
                return `| ${member.name} | ${member.description?.replace("\n", " ")} |`
            }).join("\n")}`
            : ""}
`

}

async function writeMarkdown(component: Declaration) {
    await writeFile(`../../apps/docs/pages/components/${component.name}.mdx`, generateMarkdown(component));
}


async function generateComponentDocs() {

    const manifest = JSON.parse(await readFile('./md/custom-elements.json', 'utf-8'));

    const components: Declaration[] = manifest["modules"].map((module: { declarations: Declaration[] }) => {
        return module.declarations[0] // each module only has one declaration
    })

    await Promise.all(components.map(async (component: Declaration) => await writeMarkdown(component)))
}

export default generateComponentDocs