"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCatCommitScript = exports.chunks = exports.toPushData = void 0;
const btc_1 = require("./btc");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cbor2 = require('cbor');
const limit = 520;
function toPushData(data) {
    const res = [];
    const dLen = data.length;
    if (dLen < 0x4c) {
        const dLenBuff = Buffer.alloc(1);
        dLenBuff.writeUInt8(dLen);
        res.push(dLenBuff);
    }
    else if (dLen <= 0xff) {
        // OP_PUSHDATA1
        res.push(Buffer.from('4c', 'hex'));
        const dLenBuff = Buffer.alloc(1);
        dLenBuff.writeUInt8(dLen);
        res.push(dLenBuff);
    }
    else if (dLen <= 0xffff) {
        // OP_PUSHDATA2
        res.push(Buffer.from('4d', 'hex'));
        const dLenBuff = Buffer.alloc(2);
        dLenBuff.writeUint16LE(dLen);
        res.push(dLenBuff);
    }
    else {
        // OP_PUSHDATA4
        res.push(Buffer.from('4e', 'hex'));
        const dLenBuff = Buffer.alloc(4);
        dLenBuff.writeUint32LE(dLen);
        res.push(dLenBuff);
    }
    res.push(data);
    return Buffer.concat(res);
}
exports.toPushData = toPushData;
function chunks(bin, chunkSize) {
    const chunks = [];
    let offset = 0;
    while (offset < bin.length) {
        // Use Buffer.slice to create a chunk. This method does not copy the memory;
        // it creates a new Buffer that references the original memory.
        const chunk = bin.slice(offset, offset + chunkSize);
        chunks.push(chunk);
        offset += chunkSize;
    }
    return chunks;
}
exports.chunks = chunks;
const getCatCommitScript = (leafKeyXPub, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
contractMeta) => {
    const m = new Map();
    for (const key in contractMeta) {
        m.set(key, contractMeta[key]);
    }
    const data = Buffer.from(cbor2.encode(m));
    const res = [];
    res.push(toPushData(Buffer.from(leafKeyXPub, 'hex')) // 0 OP_IF "cat"
    );
    res.push(btc_1.btc.Script.fromASM('OP_CHECKSIGVERIFY').toBuffer()); // checkSig
    res.push(btc_1.btc.Script.fromASM('OP_2DROP OP_2DROP OP_DROP').toBuffer()); // drop all stateHashes in the witness
    res.push(btc_1.btc.Script.fromASM('OP_0 OP_IF 636174').toBuffer()); //  cat protocal envelope start
    res.push(btc_1.btc.Script.fromASM('OP_1').toBuffer()); // cat FT
    const dataChunks = chunks(Array.from(data), limit);
    // if the metadata exceeds the limit of 520, it is split into multiple chunks.
    for (const chunk of dataChunks) {
        res.push(toPushData(Buffer.from(chunk)));
    }
    res.push(btc_1.btc.Script.fromASM('OP_ENDIF').toBuffer()); // cat protocal envelope end
    res.push(btc_1.btc.Script.fromASM('OP_1').toBuffer()); // put true on top stack
    return Buffer.concat(res).toString('hex');
};
exports.getCatCommitScript = getCatCommitScript;
//# sourceMappingURL=commit.js.map