const abi = require('ethereumjs-abi');

var parameterTypes = [
    'address',
    'address',
    'uint256',
    'uint256',
    'uint256',
    'uint256',
    'uint256'
];
var parameterValues = [
    '0x4eea74eccc3bf412d2944b796a0b1f6141d6e74d',
    '0xbd11a47696b1fa84bf55bd532ee4248c1e183939',
    '1504051200',
    '1506729600',
    '50000000000000000',
    '50000000000',
    '1000000000000000000000000'
];

var encoded = abi.rawEncode(parameterTypes, parameterValues);

console.log(encoded.toString('hex'));

var parameterTypes = [
    'string',
    'string',
    'uint256',
    'string'
];
var parameterValues = [
    'Test Token',
    'TST',
    '18',
    '1.0'
];

var encoded = abi.rawEncode(parameterTypes, parameterValues);

console.log(encoded.toString('hex'));
