#!/bin/bash
geth --dev --datadir privatechain --rpc --rpcaddr 0.0.0.0 --rpcport 8545 --etherbase 0x4119f7b4537e0f761c27c6268cbfd7e7118a899d --unlock 0x525f77b36333c42d02498e856cf8fdf9c05eec04 --password <(echo -n 123456) --mine
