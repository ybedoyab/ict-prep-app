import { Question } from './types';

export const kunpengQuestionsPart4: Question[] = [
    {
        id: 'kp-61',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following statements about CISC and RISC is correct? (Multiple choices)',
        options: [
            'A. CISC’s instruction system is more complex than RISC’s',
            'B. CISC has more memory control instructions',
            'C. CISC programs require large memory space and are difficult to design',
            'D. CISC chip design cycle is short'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: 'kp-62',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'After the ARMv7 architecture, the name of ARM\'s processor architecture was changed to Cortex. Which ARM architecture is used by Huawei\'s self-developed mobile phone processor chip Kirin?',
        options: ['A. Cortex-A', 'B. Cortex-M', 'C. Cortex-R'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'kp-63',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following application scenarios does not belong to FPGA?',
        options: [
            'A. Telecom equipment chips',
            'B. NFV universal server performance improvement',
            'C. Cloud computing acceleration service',
            'D. PaaS service'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-64',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following statements about the advantages of FPGA is correct? (Multiple choices)',
        options: [
            'A. General-purpose processor with the shortest development cycle',
            'B. Suitable for graphics and video processing',
            'C. Suitable for in-depth customization and can be quickly launched',
            'D. Suitable for irregular parallel computing, good real-time performance and high energy efficiency ratio'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-65',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Steve Blank, author of "The Secret History of Silicon Valley" and the father of Lean Entrepreneurship, wrote in 2018 that Moore\'s Law had expired ten years ago, but consumers had not yet noticed it. The following analysis of the reasons for the failure of Moore\'s Law is correct? (Multiple choice)',
        options: [
            'A. Process technology improvement encounters technical bottlenecks',
            'B. The cost of chip manufacturing factories will double every 4 years',
            'C. The main frequency cannot be increased, and power consumption will also increase sharply.',
            'D. Multi-core continues Moore’s Law of single chip, but the performance improvement of multi-core is difficult to be utilized by software.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-66',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'PowerPC, Power refers to Performance Optimized with Enhanced RISC, and PC refers to Performance Computing. The current mainstream PowerPC processor manufacturers include IBM and Freescale.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-67',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following chips is a semi-custom chip that not only solves the shortcomings of customized circuits, but also overcomes the shortcomings of the limited number of gate circuits of original programmable devices?',
        options: ['A. CPU', 'B. GPU', 'C. FPGA', 'D. ASIC'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'kp-68',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'The basic principle of PGA is to integrate a large number of basic digital circuit gate circuits and memories into the chip. It appears as a semi-customized circuit in the field of application-specific integrated circuits (ASIC). What are the advantages of FPGA compared to ASIC? Advantages? (Multiple choices)',
        options: ['A. Mass production cost', 'B. Performance', 'C. Speed to market', 'D. One-time cost'],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-69',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following is not a component of the CPU processor?',
        options: ['A. Register', 'B. Logic operation unit', 'C. Process', 'D. Control unit'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'kp-70',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following belongs to the upstream of the computing industry chain?',
        options: ['A. Blockchain', 'B. Chip manufacturing', 'C. Big data', 'D. Cloud computing'],
        correctAnswers: ['B'],
        type: 'unique'
    }
];
