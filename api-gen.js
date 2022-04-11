const { codegen } = require('swagger-axios-codegen');

codegen({
  methodNameMode: 'operationId',
  remoteUrl: 'http://3.0.169.101:5000/v2/api-docs',
  outputDir: './api',
  multipleFileMode: true,
  useCustomerRequestInstance: true,
});
