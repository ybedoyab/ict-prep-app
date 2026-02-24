import type { Question } from './types';

export const pre2526QuestionsPart4: Question[] = [
    {
        id: 'pre2526-61',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following commands is used to view network interface statistics on openEuler?',
        options: ['A. ip addr', 'B. ip -s link', 'C. route -n', 'D. nmcli show'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-62',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following is used to specify the Bash interpreter in a shell script?',
        options: ['A. #!/bin/bash', 'B. #bash', 'C. #bash /bin', 'D. #bin/bash'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre2526-63',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following configures a scheduled task to run commands at 08:00 every Monday?',
        options: ['A. 00 08 * 1 * commands', 'B. 00 08 * * 1 commands', 'C. 00 08 1 1 1 commands', 'D. 00 08 1 * * commands'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-64',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following is the default size of a physical extent (PE) in Logical Volume Manager?',
        options: ['A. 4 KB', 'B. 8 KB', 'C. 8 MB', 'D. 4 MB'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre2526-65',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following accurately describes the "/boot/efi" partition during openEuler installation?',
        options: ['A. Network configuration partition', 'B. System root partition', 'C. System boot partition', 'D. Swap partition'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre2526-66',
        phase: '2025-2026 Preliminary Exam',
        text: 'In the openGauss architecture, which component is responsible for storing and managing data?',
        options: ['A. Task manager', 'B. Storage engine', 'C. SQL engine', 'D. Optimizer'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-67',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following is the main function of tablespaces in openGauss?',
        options: ['A. Control the disk layout of database objects', 'B. Improve the data compression ratio', 'C. Enhance data security', 'D. Improve data query speed'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre2526-68',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements is false about the pg_hba.conf file?',
        options: [
            'A. The TYPE field specifies the connection type, which can be local or remote.',
            'B. In the pg_hba.conf file, each record occupies one row and specifies an authentication rule. An empty row or a row started with a number sign (#) is neglected.',
            'C. Before a host remotely accesses a database, you must add the host information to the database configuration file and set client authentication.',
            'D. The server checks the configuration file for the client IP address, username, and database to be accessed to determine whether the user passes authentication.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre2526-69',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements is false about the openGauss primary/standby architecture?',
        options: [
            'A. Data can be synchronized from the primary node to the standby node through log replication, achieving high availability.',
            'B. The standby node can process read requests, sharing the load of the primary node and enhancing read performance.',
            'C. In the event of an exception, the administrator must manually stop the primary database process. Automatic switchover is not supported.',
            'D. You can deploy one primary node and multiple standby nodes for better system availability.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre2526-70',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements is false about the number of openGauss database connections?',
        options: [
            'A. When the number of connections has reached the upper limit, administrators can forcibly connect to the database using the primary port number plus 1.',
            'B. The number of reserved connections (sysadmin_reserved_connections) must be smaller than max_connections.',
            'C. You can run the "gs_guc reload" command to dynamically adjust the max_connections value without restarting the database.',
            'D. The maximum number of connections is specified by the max_connections parameter.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre2526-71',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following are important milestones in the development of openEuler?',
        options: [
            'A. Donated to the OpenAtom Foundation in 2021',
            'B. First open source version released in 2019',
            'C. Long-term support (LTS) version released',
            'D. Became a well-known Linux distribution in 2020'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: 'pre2526-72',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements about the "ls" command are true?',
        options: [
            'A. "ls -S" sorts files by time.',
            'B. "ls -X" sorts files by file name extension.',
            'C. "ls -a" displays hidden files and directories.',
            'D. "ls -l" displays details.'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-73',
        phase: '2025-2026 Preliminary Exam',
        text: 'If "dir2" already exists, which of the following are the possible outcomes of the "mv dir1 dir2" command?',
        options: [
            'A. If "dir2" does not exist, "dir1" is renamed "dir2".',
            'B. If "dir2" is a file, the system prompts the user to confirm whether to overwrite "dir2".',
            'C. If "dir2" is a directory, "dir1" is moved into "dir2".',
            'D. "dir2" is overwritten, regardless of whether it exists or not.'
        ],
        correctAnswers: ['B', 'C'],
        type: 'multi'
    },
    {
        id: 'pre2526-74',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following Vim command options can save a file and exit?',
        options: [
            'A. :x',
            'B. :wq',
            'C. ZZ',
            'D. :q!'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: 'pre2526-75',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which development stages have data management technologies evolved through?',
        options: [
            'A. File system stage',
            'B. Manual management stage',
            'C. Database system stage',
            'D. AI management stage'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-76',
        phase: '2025-2026 Preliminary Exam',
        text: 'When a C/C++ program runs on the Kunpeng processor platform, which of the following statements about the process from source code to execution are true?',
        options: [
            'A. The memory addresses used during program execution are usually virtual addresses, which must be translated into physical addresses by the memory management unit.',
            'B. The Kunpeng processor uses the Armv7 instruction set architecture.',
            'C. After the source code is compiled, assembled, and linked, an executable file is generated. During the linking phase, libraries can be linked either statically or dynamically.',
            'D. When a program runs, its executable file is loaded into physical memory, and the CPU fetches instructions from physical memory for execution.'
        ],
        correctAnswers: ['A', 'C'],
        type: 'multi'
    },
    {
        id: 'pre2526-77',
        phase: '2025-2026 Preliminary Exam',
        text: 'The "-march" option plays a crucial role for the GCC compiler on the Kunpeng platform (based on Arm architecture). Which of the following are the functions of the "-march" option?',
        options: [
            'A. It controls the range of instruction sets generated by the compiler, affecting program compatibility and performance.',
            'B. It determines whether to generate position-independent code (PIC), which affects how the program is loaded.',
            'C. It specifies the instruction set architecture version supported by the target processor.',
            'D. It enables the compiler to optimize code based on the characteristics of a specific processor.'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-78',
        phase: '2025-2026 Preliminary Exam',
        text: 'On openEuler, which of the following methods can be used to view the validity period of a user password?',
        options: [
            'A. Using "chage"',
            'B. Viewing "/etc/passwd"',
            'C. Viewing "/etc/shadow"',
            'D. Using "passwd"'
        ],
        correctAnswers: ['A', 'C'],
        type: 'multi'
    },
    {
        id: 'pre2526-79',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following modes are supported by Linux Virtual Server (LVS)?',
        options: [
            'A. DR mode',
            'B. KONG mode',
            'C. NAT mode',
            'D. TUN mode'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-80',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements are true about the Samba file sharing service?',
        options: [
            'A. Samba can be used for file sharing between Linux and Windows systems, as well as between Linux systems.',
            'B. Samba is a piece of software that enables Linux to use the Server Message Block (SMB) network communication protocol.',
            'C. A Samba server can serve as a file sharing server but not as a Samba client.',
            'D. On Windows, Samba uses the NetBIOS protocol.'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    }
];
