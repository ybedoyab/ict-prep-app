import { Question } from './types';

export const kunpengQuestionsPart1: Question[] = [
    {
        id: 'kp-1',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following chips does not belong to the chip type in the evolution of FPGA?',
        options: ['A. CPLD', 'B. PROM', 'C. ASIC', 'D. PAL'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'kp-2',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following chips is a semi-custom chip that not only solves the shortcomings of customized circuits, but also overcomes the shortcomings of the limited number of gate circuits of original programmable devices?',
        options: ['A. FPGA', 'B. CPU', 'C. GPU', 'D. ASIC'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'kp-3',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Universal servers are servers based on PC architecture, using Intel or other processor chips compatible with the X86 instruction set and Linux or Windows operating systems. They are cheap, have good compatibility, have poor stability, and are not too secure. High, mainly used in small and medium-sized enterprises and non-critical businesses.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-4',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following micro-architectures were launched in the year of Intel TickTock (Pendulum Mode) architecture? (Multiple choices)',
        options: ['A. Nehalem', 'B. Cascade Lake', 'C. Haswell', 'D. Sandy Bridge'],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-5',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Breaking the CPU boundary in intelligent computing refers to using server clusters to process complex applications.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-6',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following is not a typical application scenario of GPU?',
        options: [
            'A. General computing, complete complex logical operations',
            'B. Video image processing scenario',
            'C. HPC hybrid application high throughput scenario',
            'D. HPC high-performance acceleration scenario'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'kp-7',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'ARM microprocessors have spread throughout various product markets such as industrial control, consumer electronics, communication systems, network systems, wireless systems, etc. Which of the following is incorrect about the characteristics of the ARM architecture?',
        options: [
            'A. Supports multiple instruction sets of 16-bit, 32-bit, and 64-bit, and is well compatible with various application scenarios from IOT, terminals to clouds',
            'B. Adopt complex instruction set and high processing efficiency',
            'C. Extensive use of registers, most data operations are completed in registers, and instructions are executed faster',
            'D. The same functions and performance occupy a small chip area, low power consumption, and higher integration. More hardware CPU cores have better concurrent performance.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-8',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following statements about specialized computing is incorrect?',
        options: [
            'A. Dedicated computing platforms mainly refer to mainframes and minicomputers',
            'B. Dedicated computing platform with multi-purpose RISC architecture',
            'C. Dedicated computing platforms are expensive and have few applications. Only a few enterprises and a small number of applications can use computers.',
            'D. Huawei’s KunLun minicomputer belongs to a closed computing architecture'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-9',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following statements about chips is incorrect?',
        options: [
            'A. Chips are usually made of semiconductors',
            'B. The semiconductor components commonly used in current chips are diodes.',
            'C. The current chip manufacturing process is nanoscale',
            'D. The essence of a chip is an integrated circuit'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-10',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following is not a reason for the rise of edge computing?',
        options: [
            'A. Ensure data reliability when the network is disconnected',
            'B. Achieve on-demand and on-demand use of IT resources',
            'C. Considering data privacy, some applications do not want to transmit data to the cloud.',
            'D. Industrial applications have high latency requirements'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-11',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following processor types belongs to the RISC instruction set architecture? (Multiple choices)',
        options: ['A. ARM', 'B. MIPS', 'C. PowerPC', 'D. X86'],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: 'kp-12',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Software is a series of computer data and instructions organized in a specific order. Which of the following statements about software is incorrect?',
        options: [
            'A. Middleware is software that provides connections between system software and application software.',
            'B. System software is responsible for managing various independent hardware in the computer system, providing a platform for running application software, and adapting to different application software.',
            'C. Application software is software developed for a specific purpose',
            'D. Computer software is divided into system software, application software and middleware in between.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-13',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Hardware resource pooling is the future evolution trend of server hardware. Which of the following is not its advantage?',
        options: [
            'A. Decoupling of assets and games',
            'B. A single system operates independently and efficiently',
            'C. Dynamic allocation of resources',
            'D. Implement intelligent scheduling and optimization'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-14',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Computer software is divided into programming languages, system software, application software and middleware. System software provides the most basic functions for computer use.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-15',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'What is a series of equipment developed by Huawei for artificial intelligence application computing platform?',
        options: ['A. KunLun series', 'B. Atlas series', 'C. E9000 series', 'D. TalShan series'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-16',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Operating System (OS for short) is a computer program that manages and controls computer hardware and software resources. Which of the following are its core functions? (Multiple choices)',
        options: ['A. Driver management', 'B. File system management', 'C. Program management', 'D. System call reception'],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-17',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'CPU main frequency is also called clock frequency. The unit is megahertz (MHz) or gigahertz (GHz2). Which of the following is the function?',
        options: [
            'A. Used to indicate the speed of CPU operations and data processing',
            'B. Determine the bus data transmission speed',
            'C. Determines the running speed of the entire motherboard',
            'D. Determine the speed of data exchange between CPU and memory'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'kp-18',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following does not belong to server virtualization software?',
        options: ['A. Fusion Compute', 'B. Xen Server', 'C. Fusion Access', 'D. VMware ESXI'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'kp-19',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'The mark of the base memory module shows the word "PC3L". What does "L" in "PC3L" mean?',
        options: [
            'A. The memory module type is UDIMM',
            'B. Its rated power is 30W',
            'C. Its rated voltage is 1.35V',
            'D. The bit width of its memory particles is 64*3bit'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'kp-20',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'The three types of operating systems divided by application fields are () server operating systems and (). Server operating systems refer to operating systems installed on large computers, such as Web servers, application servers, database servers, etc. (Multiple choice)',
        options: [
            'A. Open source operating system',
            'B. Embedded operating system',
            'C. Desktop operating system',
            'D. Smart card operating system'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    }
];
