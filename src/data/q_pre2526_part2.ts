import type { Question } from './types';

export const pre2526QuestionsPart2: Question[] = [
    {
        id: 'pre2526-21',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which statement is false about symbolic links?',
        options: [
            'A. A link becomes invalid after the source file is deleted.',
            'B. They exist as paths.',
            'C. They can link to directories.',
            'D. They cannot link across file systems.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre2526-22',
        phase: '2025-2026 Preliminary Exam',
        text: 'On openEuler, configuration files are used to manage network information for network devices. Where are these configuration files stored by default?',
        options: [
            'A. /etc/sysconfig/network',
            'B. /etc/ssh',
            'C. /etc/systemd',
            'D. /etc/sysconfig/network-scripts'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre2526-23',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which command can be used to set the rsyslog service to automatically start upon system boot on Linux?',
        options: [
            'A. systemctl disable rsyslog',
            'B. systemctl is-enabled rsyslog',
            'C. systemctl enable rsyslog',
            'D. systemctl start rsyslog'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre2526-24',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which openGauss command can create a database?',
        options: ['A. GENERATE DATABASE', 'B. CREATE DATABASE', 'C. ADD DATABASE', 'D. NEW DATABASE'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-25',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements is true about the openGauss community ecosystem?',
        options: [
            'A. openGauss uses the BSD open-source license, allowing enterprises to freely modify and release closed-source derivative versions.',
            'B. Special Interest Group (SIG) is the only technical collaboration organization in the community and is open only to Huawei technical experts.',
            'C. Collaboration with universities is the core objective of the community ecosystem. This collaboration involves only textbook writing and does not include code contributions or industry applications.',
            'D. The community follows the principles of "co-construction, sharing, and co-governance," and establishes organizations such as the Board of Directors and technical committee to involve enterprises and developers in decision-making.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre2526-26',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements about the Linux directories are true?',
        options: [
            'A. "/lib" stores the system\'s most basic dynamic link libraries (DLLs), which are similar in function to DLL files on Windows.',
            'B. "/etc" stores all configuration files and subdirectories required for system management.',
            'C. "/mnt" is used to permanently mount other file systems.',
            'D. "/usr" stores user applications and files and is similar to the "Program Files" directory on Windows.'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-27',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following are advantages of the RPM Package Manager?',
        options: [
            'A. Parameter information recorded in a database for convenient query and management',
            'B. Ignoring dependency management',
            'C. Complex installation procedure',
            'D. Broad compatibility'
        ],
        correctAnswers: ['A', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-28',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following commands can manage system routes on Linux?',
        options: ['A. ip', 'B. nmcli', 'C. network', 'D. route'],
        correctAnswers: ['A', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-29',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following are common reasons for software installation from source?',
        options: [
            'A. To boost software performance by optimizing compilation parameters',
            'B. Outdated RPM package version',
            'C. No available RPM package',
            'D. To add features not provided in an RPM package'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-30',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following items should be included in the name of an RPM package?',
        options: ['A. Version number', 'B. Processor architecture', 'C. Release number', 'D. Software name'],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-31',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements are true about the prerequisites for installing openGauss on one primary and one standby node?',
        options: [
            'A. The installation path is empty, and a common user has read, write, and execute permissions on the installation path.',
            'B. All ports in the openGauss port matrix must be available.',
            'C. A common user has the execute permission on the downloaded openGauss package.',
            'D. SSH trust relationship must be configured between the primary and standby servers.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-32',
        phase: '2025-2026 Preliminary Exam',
        text: 'When porting an application from x86 to the Kunpeng architecture, which of the following may cause it to fail to run?',
        options: [
            'A. The memory management mechanisms are different.',
            'B. The OS kernel versions are different.',
            'C. The binary file formats are different.',
            'D. x86 and Kunpeng use different instruction set architectures.'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-33',
        phase: '2025-2026 Preliminary Exam',
        text: 'In the Kunpeng processor architecture, cache line alignment is an important technique for improving program performance. Which of the following statements about this technique are true?',
        options: [
            'A. Cache line alignment increases the CPU cache hit ratio to improve program performance.',
            'B. The memory layout of data objects cannot be aligned by compiler optimization and must be handled manually by developers.',
            'C. Cache line alignment can reduce the cache coherency overhead caused by false sharing.',
            'D. If data objects are not aligned to cache lines, memory accesses may multiply, reducing access efficiency.'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-34',
        phase: '2025-2026 Preliminary Exam',
        text: 'On Linux, which of the following are the key performance tuning policies for the block device I/O subsystem?',
        options: [
            'A. Application-layer data compression: Reduce the amount of data written and storage used, indirectly lowering the drive write frequency.',
            'B. File system and block device optimization: Choose a high-performance file system (such as XFS or ext4) that fits the service requirements, and properly configure the block size, mount parameters, and block device queue depth to improve I/O throughput and response efficiency.',
            'C. Adjust the I/O merging policy and timeout mechanism of block devices, optimize multi-request merging and error recovery, and reduce kernel I/O processing overhead.',
            'D. I/O scheduling algorithm and prefetch mechanism: Select an appropriate I/O scheduler based on the load type (random or sequential) and adjust the prefetch window size to improve access locality and throughput.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-35',
        phase: '2025-2026 Preliminary Exam',
        text: 'A user plans to port a program written in C, C++, or Go from the x86 platform to the Kunpeng platform. Which of the following statements about porting principles, program compilation, and execution are true?',
        options: [
            'A. A machine language is a binary file consisting of "0" and "1". It is irrelevant to the platform and does not require extra processing.',
            'B. When the generated executable program runs, it loads instructions and data directly from drives into CPU caches to improve efficiency. After execution, the instructions and data are stored in the memory.',
            'C. Programs written in compiled languages can run properly on the Kunpeng platform only after being recompiled for instruction set.',
            'D. The source code must be converted into machine instructions for the target architecture using a compiler and an assembler.'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-36',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following commands can be used to query drive information on openEuler?',
        options: ['A. df -h', 'B. parted -l', 'C. mkfs -t', 'D. fdisk -l'],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-37',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements are true about special shell variables?',
        options: [
            'A. "$@" indicates the exit status of the previous command, or the return value of a function.',
            'B. "$0" indicates the file name of the current script.',
            'C. "$#" indicates the number of arguments passed to a script or function.',
            'D. "$$" indicates all arguments passed to the script or function.'
        ],
        correctAnswers: ['B', 'C'],
        type: 'multi'
    },
    {
        id: 'pre2526-38',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements are true about runlevels?',
        options: [
            'A. Runlevel 1 (single-user mode) corresponds to rescue.target, indicating that the system is in rescue mode where only the "root" user can log in.',
            'B. Runlevels 2, 3, and 4 correspond to multi-user.target, indicating that the system enters multi-user mode, which allows multiple users to log in and provides a graphical interface.',
            'C. Runlevel 0 corresponds to poweroff.target, indicating that the system will shut down.',
            'D. Runlevel 6 corresponds to graphical.target, indicating that the system enters graphical interface mode.'
        ],
        correctAnswers: ['A', 'C'],
        type: 'multi'
    },
    {
        id: 'pre2526-39',
        phase: '2025-2026 Preliminary Exam',
        text: 'On Linux, if "a=2" and "b=3", which of the following commands can be used to calculate the sum of "a" and "b"?',
        options: ['A. echo $[ $a + $b ]', 'B. echo $(($a+$b))', 'C. echo ${a+b}', 'D. echo $a + $b'],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: 'pre2526-40',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following commands can be used to change the owner group of a file on openEuler?',
        options: ['A. groupmod', 'B. groups', 'C. chgrp', 'D. chown'],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    }
];
