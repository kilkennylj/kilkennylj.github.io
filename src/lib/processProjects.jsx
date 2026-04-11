export function processProjects(projects)
{
    let showdown = require('showdown');
    let converter = new showdown.Converter();
    
    for (let i = 0; i < projects.length; i++)
      projects[i] = converter.makeHtml(projects[i]);

    return projects;
}