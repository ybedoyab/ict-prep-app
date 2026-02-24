import { Question } from './types';

export const preliminaryQuestionsPart2: Question[] = [
    {
        id: 'pre-36',
        phase: 'Preliminary Stage 2024-2025',
        text: 'The "-march" option plays a crucial role for the GCC compiler on the Kunpeng platform (based on ARM architecture). Which of the following are functions of the "-march" option?',
        options: [
            'A. Optimizes the code to match the features of a specific processor.',
            'B. Specifies the architecture version of the target processor.',
            'C. Determines whether to generate address-independent code.',
            'D. Defines the range of instructions that the compiler should generate.'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-37',
        phase: 'Preliminary Stage 2024-2025',
        text: 'A user is trying to port programs written in C, C++, and Go from the x86 architecture to Kunpeng. Which of the following statements are true about this process?',
        options: [
            'A. The generated machine language programs can directly load instructions and data into the CPU cache at runtime.',
            'B. Source code needs to be converted into machine instructions by a compiler and an assembler.',
            'C. Machine language programs can run directly on any processor without additional processing.',
            'D. Programs written in compiled languages need to be recompiled to adapt to the instruction set of Kunpeng processors.'
        ],
        correctAnswers: ['B', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-38',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following modes are supported by Linux Virtual Server (LVS)?',
        options: ['A. DR mode', 'B. KONG mode', 'C. TUN mode', 'D. NAT mode'],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-39',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In openEuler, Vim is in normal mode and the cursor is at line 5 of a file. Which of the following commands move the cursor to the first line?',
        options: ['A. gg', 'B. 1G', 'C. G', 'D. 4k'],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-40',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following software package installation methods are available in openEuler?',
        options: [
            'A. Directly executing binary installation files',
            'B. "rpm"',
            'C. Source code compilation',
            'D. "yum" or "dnf"'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-41',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following openGauss tools can export data from the database?',
        options: ['A. gs_dump', 'B. gs_dumpall', 'C. gs_check', 'D. gs_restore'],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: 'pre-42',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following are Data Manipulation Language (DML) statements in SQL?',
        options: ['A. UPDATE', 'B. ALTER', 'C. DELETE', 'D. INSERT'],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-43',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements are true about the single-node database architecture?',
        options: [
            'A. The single-node architecture has performance bottlenecks.',
            'B. If the single-node architecture is faulty, data loss may occur.',
            'C. In the single-node architecture, applications may preempt database resources, which cannot be resolved.',
            'D. The single-node architecture is not scalable and cannot cope with increasing service requirements.'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: 'pre-44',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements are true about the Samba file sharing service?',
        options: [
            'A. Samba is a piece of software that enables Linux to use the Server Message Block (SMB) network communication protocol.',
            'B. A Samba server can serve as a file sharing server and a Samba client.',
            'C. Samba can be used for file sharing between Linux and Windows systems, as well as between Linux systems.',
            'D. On Windows, Samba uses the NetBIOS protocol.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-45',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements are true about Linux commands?',
        options: [
            'A. "umount" is used to unmount devices.',
            'B. "mount" is used to mount devices.',
            'C. "du" displays the drive usage of a specified directory.',
            'D. "fdisk -l" displays drive partition details.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-46',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Cron scheduled tasks usually include ">/dev/null 2>&1" at the end.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'pre-47',
        phase: 'Preliminary Stage 2024-2025',
        text: 'A user group can have multiple users, but a user can only belong to a single user group.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'pre-48',
        phase: 'Preliminary Stage 2024-2025',
        text: 'PXE booting or virtual CD-ROM drives are common methods for batch installation of openEuler.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'pre-49',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In the openGauss database, the primary and standby mode is automatically configured by default to ensure high data availability and fault recovery capabilities.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'pre-50',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In the openGauss database, when the GRANT statement is used to grant permissions, the granted user can immediately grant the obtained permissions to other users, provided that "WITH GRANT OPTION" is specified during the authorization.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'pre-51',
        phase: 'Preliminary Stage 2024-2025',
        text: 'A-Tune is an AI-powered automatic optimization system that uses intrusive system profiling to sense service workload. It matches the optimal resource model for each service and responds to service changes in real time.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'pre-52',
        phase: 'Preliminary Stage 2024-2025',
        text: 'When using the system performance analysis tool provided by the Kunpeng DevKit to analyze the performance of C or C++ applications, you can view the function source code, assembly code, and the control flow graph of basic blocks of function assembly code.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'pre-53',
        phase: 'Preliminary Stage 2024-2025',
        text: 'The Kunpeng 920 processor features a powerful 64-core design and integrates eight advanced DDR4 memory controllers, enabling support for up to eight DDR4 memory slots to meet high-performance computing demands.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'pre-54',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In openEuler, the "ps -ef | grep xxx" command can be used to find processes that contain "xxx" within their process information.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'pre-55',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In Vim normal mode of Vim in openEuler, pasting content copied by pressing "yy" will insert the content below the current line.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'pre-56',
        phase: 'Preliminary Stage 2024-2025',
        text: 'openEuler can be installed using various methods, including CD-ROM, USB flash drives, and virtual CD-ROM drives.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'pre-57',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In the character type VARCHAR(n), "n" indicates the number of bytes instead of characters.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'pre-58',
        phase: 'Preliminary Stage 2024-2025',
        text: 'The "commit" command is used to commit a transaction to a database.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'pre-59',
        phase: 'Preliminary Stage 2024-2025',
        text: 'You can use the "route" command to add routing configurations. The added routing configurations are stored in the memory and remain valid after a reboot.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'pre-60',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In Linux, processes with higher priority are executed preferentially. A higher PRI value indicates a higher process priority.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    }
];
