

class MemoryBlock {
    constructor(size) {
        this.buffer = new ArrayBuffer(size);
        this.view = new DataView(this.buffer);
        this.size = size;
        this.allocated = false;
    }

    allocate() {
        if (!this.allocated) {
            this.allocated = true;
            console.log(`Allocated ${this.size} bytes of memory.`);
            return this.view;
        } else {
            throw new Error('Memory block already allocated.');
        }
    }

    deallocate() {
        if (this.allocated) {
            this.allocated = false;
            console.log(`Deallocated ${this.size} bytes of memory.`);
        } else {
            throw new Error('Memory block already deallocated.');
        }
    }
}

class MemoryManager {
    constructor(totalSize) {
        this.totalSize = totalSize;
        this.memoryBlocks = [];
    }

    allocateBlock(size) {
        if (this.getFreeMemory() < size) {
            throw new Error('Insufficient memory to allocate.');
        }

        const block = new MemoryBlock(size);
        this.memoryBlocks.push(block);
        return block.allocate();
    }

    deallocateBlock(block) {
        block.deallocate();
        this.memoryBlocks = this.memoryBlocks.filter(b => b !== block);
    }

    getFreeMemory() {
        const usedMemory = this.memoryBlocks.reduce((acc, block) => acc + block.size, 0);
        return this.totalSize - usedMemory;
    }

    garbageCollect() {
        this.memoryBlocks = this.memoryBlocks.filter(block => block.allocated);
        console.log('Garbage collection complete.');
    }
}

// Example usage
const totalMemory = 1024; // 1KB
const manager = new MemoryManager(totalMemory);

try {
    const block1 = manager.allocateBlock(256);
    const block2 = manager.allocateBlock(128);
    console.log(`Free memory: ${manager.getFreeMemory()} bytes`);

    manager.deallocateBlock(block1);
    console.log(`Free memory after deallocation: ${manager.getFreeMemory()} bytes`);

    manager.garbageCollect();
} catch (error) {
    console.error(error.message);
}
