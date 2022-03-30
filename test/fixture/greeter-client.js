const {promisify} = require("util");
const path = require("path");
const {createClient} = require("@ptibv/grpc-kit-js");

const client = createClient({
  protoPath: path.resolve(__dirname, "./greeter.proto"),
  packageName: "greeter",
  serviceName: "Greeter"
}, "0.0.0.0:50051");

exports.client = client;
exports.hello = promisify(client.hello.bind(client));
exports.goodbye = promisify(client.goodbye.bind(client));