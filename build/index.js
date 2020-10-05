const fs = require('fs').promises;
const prettier = require('prettier');
const easings = require('../index.json');
const templates = require('./templates');

(async function () {
  const outputs = [
    ['index.css', templates.css, 'css'],
    ['index.js', templates.js, 'babel'],
    ['index.less', templates.less, 'less'],
    ['_index.scss', templates.scss, 'scss'],
  ];

  const options = await prettier.resolveConfig(__dirname);

  const written = await Promise.all(
    outputs.map(async ([file, template, type]) => {
      try {
        const data = prettier.format(template(easings), {
          ...options,
          parser: type,
        });
        await fs.writeFile(file, data);
        return { file };
      } catch (error) {
        return { error, file };
      }
    })
  );

  written.forEach(({ error, file }) => {
    if (error) {
      console.info(`🛑 There was an issue building "${file}":`);
      console.error(error);
    } else {
      console.info(`📝 "${file}" created sucessfully!`);
    }
  });
})();
