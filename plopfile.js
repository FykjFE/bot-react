module.exports = function (plop) {
  plop.setGenerator('test', {
    description: '生成模版文件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入文件名称',
        default: 'test',
      },
    ],
    actions: (data) => {
      const name = '{{name}}';
      return [
        {
          type: 'add',
          path: `src/pages/${name}/{{properCase name}}.tsx`,
          templateFile: 'template/view/index.hbs',
          data: {
            name: name,
          },
        },
      ];
    },
  });
  plop.setHelper('upperCase', function (text) {
    return text.toUpperCase();
  });
};
