
/**
 * Packet Structure:
 * 
 * The first 2 bytes uint16le - Packet Code
 * The next 4 bytes uint32le (offset 2 bytes) - Content Length
 * 
 *     1       2       3       4       5       6
 * +-------+-------+-------+-------+-------+-------+
 * |       |       |       |       |       |       |
 * |  Packet Code  |        Content Length         |
 * |       |       |       |       |       |       |
 * +-------+-------+-------+-------+-------+-------+
 * 
 * Code is any arbitrary number to signal what packet this is.
 * Codes 0-1024 are reserved by the Storm framework.
 */
export class Packet {
    public static readonly HEADER_SIZE: number = 6;

    private $header: Buffer;
    private $payload: Buffer;

    public constructor(code: number, content?: Buffer) {
        this.$header = Buffer.alloc(6);
        this.$header.writeUint16LE(code, 0);

        if (!content) {
            content = Buffer.alloc(0);
        }

        this.$header.writeUint32LE(content.byteLength);
        this.$payload = content.subarray();
    }
}
