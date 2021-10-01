const fs = require('fs').promises;
const prettier = require('prettier');
const easings = require('../index.json');
const templates = require('./templates');

const outputs = [
  // filename, template, babel parser
  ['index.css', templates.css, 'css'],
  ['index.js', templates.js, 'babel'],
  ['index.less', templates.less, 'less'],
  ['_easings.scss', templates.scss, 'scss'],
];

(async function () {
  const prettierOptions = await prettier.resolveConfig(__dirname);

  const written = await Promise.all(
    outputs.map(async ([filename, template, parser]) => {
      try {
        const data = prettier.format(template(easings), {
          ...prettierOptions,
          parser,
        });
        await fs.writeFile(filename, data);
        return { filename };
      } catch (error) {
        return { error, filename };
      }
    })
  );

  written.forEach(({ error, filename }) => {
    if (error) {
      console.info(`🛑 There was an issue building "${filename}":`);
      console.error(error);
    } else {
      console.info(`📝 "${filename}" created sucessfully!`);
    }
  });
})();
