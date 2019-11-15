const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);

  const runBlocks = root.find(j.ExpressionStatement, {
    expression: {
      type: 'CallExpression',
      callee: {
        type: 'Identifier',
        name: 'run',
      },
    },
  });

  runBlocks.replaceWith(nodePath => {
    const { node } = nodePath;

    return node.expression.arguments[0].body.body;
  });

  return root.toSource({
    quote: 'single',
    wrapColumn: 100,
    trailingComma: true,
  });
};
