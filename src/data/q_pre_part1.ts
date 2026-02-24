import { Question } from './types';

export const preliminaryQuestions: Question[] = [
    {
        id: 'pre-1',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which command is used to view open files in openEuler?',
        options: ['A. lsof', 'B. mount', 'C. ls', 'D. find'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre-2',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which statement is false about single quotes in shell scripting?',
        options: [
            'A. Any character within single quotes will be output as is.',
            'B. Single quotes cannot appear within single quotes.',
            'C. Variables within single quotes are invalid.',
            'D. Single quotes escaped with a backslash can appear within single quotes.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre-3',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In openEuler, what is the maximum number of primary partitions allowed on a drive?',
        options: ['A. Unlimited', 'B. Four', 'C. One', 'D. Three'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre-4',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which statement is false about the "kill" command?',
        options: [
            'A. "kill -19" pauses the process.',
            'B. "kill -15" unconditionally stops the process without terminating it.',
            'C. "kill -9" forcibly terminates the process.',
            'D. "kill -1" suspends the process.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre-5',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which option displays the default shell of the current user?',
        options: ['A. cat /etc/shells', 'B. echo $0', 'C. echo $PATH', 'D. echo $SHELL'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre-6',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements is false about the commands?',
        options: [
            'A. "touch" creates files or directories.',
            'B. "cp" copies files or directories.',
            'C. "rm" deletes files or directories.',
            'D. "mv" moves files or directories.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre-7',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following openGauss commands is used to delete rows from a table?',
        options: ['A. UPDATE', 'B. TRUNCATE', 'C. DELETE', 'D. DROP'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre-8',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following openGauss commands is used to create a schema?',
        options: ['A. CREATE SCHEMA', 'B. NEW SCHEMA', 'C. GENERATE SCHEMA', 'D. ADD SCHEMA'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre-9',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Compared with other open-source databases, openGauss has many new technical features. Which of the following statements is false?',
        options: [
            'A. It provides the Ustore for frequent update scenarios.',
            'B. It provides the Sstore engine for frequent query scenarios.',
            'C. It adopts the Mulan Permissive Software License, allowing code to be freely modified, used, and referenced.',
            'D. It provides AI-based parameter tuning and index recommendations and automatically recommends AI parameters.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre-10',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements is true about the openGauss database architecture?',
        options: [
            'A. openGauss uses the single-process and multi-thread architecture. All database operations are performed in the same process as threads.',
            'B. openGauss uses the multi-process and multi-thread architecture.',
            'C. openGauss uses the client/server architecture. The client and server run in the same process.',
            'D. openGauss uses the multi-process architecture. Each database connection corresponds to an independent process.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre-11',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In the field of integrated circuits (IC), "die" refers to a single, unpackaged integrated circuit chip. In the Huawei-designed Kunpeng 920 processor, what is the maximum number of cores that can be integrated into a single CPU die?',
        options: ['A. 48', 'B. 64', 'C. 32', 'D. 16'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre-12',
        phase: 'Preliminary Stage 2024-2025',
        text: 'When you build open source software for the Kunpeng platform using Maven repositories, which of the following statements is false?',
        options: [
            'A. Maven repositories provide all external dependency libraries, including versions specifically optimized for the Kunpeng platform.',
            'B. The local Maven repository is first queried.',
            'C. When the required components are not present in the local repository, Maven downloads them from remote repositories.',
            'D. Maven repositories can be configured with proxy settings to accelerate dependency downloads from remote repositories.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre-13',
        phase: 'Preliminary Stage 2024-2025',
        text: 'When you optimize the performance of the CPU and memory subsystems on the Kunpeng platform, if the CPU usage remains high, which of the following measures is not an effective operation to reduce CPU usage and improve performance?',
        options: [
            'A. Optimizing software algorithms and code to reduce unnecessary CPU calculations',
            'B. Fine-tuning memory channel configuration to match CPU capabilities for optimal bandwidth utilization',
            'C. Using tools like strace to analyze system calls and process behavior',
            'D. Upgrading to a more powerful CPU model or expanding memory capacity.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre-14',
        phase: 'Preliminary Stage 2024-2025',
        text: 'After successfully x86-based software is ported to the Kunpeng architecture, a series of tests is required to ensure that the ported software meets expectations in terms of performance, stability, and compatibility. In this context, which of the following statements is the most inaccurate about the core objective of the post-porting performance testing or the characteristics of the tools and methods employed during its execution?',
        options: [
            'A. Employing standardized models like PTGM and GAME(A) during performance testing helps systematically plan, execute, and effectively analyze the test results, providing guidance for performance optimization.',
            'B. Advanced performance testing tools, such as LoadRunner, can simulate large-scale concurrent user activity to accurately evaluate the performance of ported software under high pressure on the Kunpeng architecture, thereby identifying potential bottlenecks.',
            'C. The core of performance testing lies in measuring the response time, throughput, and stability of the ported software under high load or peak usage scenarios on the Kunpeng architecture to ensure it meets the demands of real-world application scenarios.',
            'D. The core objective of performance testing is to ensure comprehensive functional coverage of the ported software and verify that each function point executes without errors on the Kunpeng architecture, guaranteeing the completeness and correctness of the software functions.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre-15',
        phase: 'Preliminary Stage 2024-2025',
        text: 'For the C or C++ source code "c = a + b;", which of the following statements is true about the difference in assembly code between the Kunpeng processor and the x86 processor?',
        options: [
            'A. The Kunpeng processor uses two "mov" instructions to load data, one "add" instruction for addition, and one "str" instruction to save the result. The x86 processor uses two "ldr" instructions to load data, one "add" instruction for addition, and one "mov" instruction to save the result.',
            'B. Both use two "ldr" instructions to load data, one "add" instruction for addition, and one "str" instruction to save the result.',
            'C. The Kunpeng processor uses two "ldr" instructions to load data, one "add" instruction for addition, and one "str" instruction to save the result. The x86 processor uses two "mov" instructions to load data, one "add" instruction for addition, and one "mov" instruction to save the result.',
            'D. Both use two "mov" instructions to load data, one "add" instruction for addition, and one "mov" instruction to save the result.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre-16',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In openEuler, which "rpm" command is used to install application software?',
        options: ['A. rpm -e xxx.rpm', 'B. rpm -ivh xxx.rpm', 'C. rpm -qi xxx.rpm', 'D. rpm -ql xxx.rpm'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre-17',
        phase: 'Preliminary Stage 2024-2025',
        text: 'While you edit a text file using Vim in openEuler, which command can be used in normal mode to forcibly save and exit the file?',
        options: ['A. :wq-f', 'B. :wq force', 'C. :wq', 'D. :wq!'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre-18',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In openEuler, configuration files are used to manage network information for network devices. Where are these configuration files stored by default?',
        options: ['A. /etc/profile', 'B. /etc/sysconfig/network-scripts', 'C. /etc/passwd', 'D. /etc/systemd'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre-19',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements about partitioned tables in openGauss is true?',
        options: [
            'A. Partitioned tables cannot be joined with ordinary tables.',
            'B. Tables can be partitioned only by range.',
            'C. A partitioned table is a large table divided into multiple small and independent physical blocks based on a certain rule for storage. The physical blocks are considered whole.',
            'D. After a partitioned table is created, partitions cannot be added to or deleted from the table.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre-20',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following gsql meta-commands can be used to list all databases in an openGauss cluster?',
        options: ['A. \\d', 'B. \\dn', 'C. \\l', 'D. \\s'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre-21',
        phase: 'Preliminary Stage 2024-2025',
        text: 'If a database administrator wants to interrupt a query that has been running for a long time, which of the following views can be used to obtain the process ID of the session to help the database administrator perform this operation?',
        options: ['A. PG_STATS', 'B. PG_USER', 'C. PG_STAT_USER', 'D. PG_STAT_ACTIVITY'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre-22',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following files is used to set the openGauss client authentication policy?',
        options: ['A. pg_ident.conf', 'B. postgresql.conf', 'C. pg_ctl.conf', 'D. pg_hba.conf'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre-23',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In Linux, which of the following statements is true about the function of the "chown" command?',
        options: [
            'A. Modifies the user and user group to which a file or directory belongs.',
            'B. Modifies the default home directory of a user.',
            'C. Modifies the read, write, and execute permissions on a file or directory.',
            'D. Modifies the link attributes of a file or directory, specifying if it is a hard or soft link.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre-24',
        phase: 'Preliminary Stage 2024-2025',
        text: 'A virtual machine (VM) has 2 GB of memory. What is the recommended swap partition size when openEuler is installed on the VM?',
        options: ['A. 4 GB', 'B. 1 GB', 'C. 512 MB', 'D. 2 GB'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre-25',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following is the default listening port of the OpenSSH service?',
        options: ['A. 22', 'B. 20', 'C. 23', 'D. 21'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre-26',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In openEuler, which of the following commands can be used to query drive information? (Multiple-answer)',
        options: ['A. parted -v', 'B. mkfs -t', 'C. fdisk -l', 'D. df -h'],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-27',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In openEuler, which of the following commands can be used to view network device configurations? (Multiple-answer)',
        options: ['A. ip link show', 'B. ifconfig -a', 'C. ip addr', 'D. nmcli device status'],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-28',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements are true about switching to the "root" user? (Multiple-answer)',
        options: [
            'A. Configuring "NOPASSWD" in "/etc/sudoers" allows the "sudo" command to bypass the password prompt.',
            'B. The "sudo" command allows common users to execute commands that only the "root" user can execute.',
            'C. The "su -" command only switches the user identity to "root", but the shell environment remains that of the common user.',
            'D. When the "su" command is used, both the user identity and shell environment are switched to the "root" user.'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: 'pre-29',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements are true about file access control lists (ACLs)? (Multiple-answer)',
        options: [
            'A. The "getfacl" command is used to retrieve the ACL of a file.',
            'B. The "setfacl" command is used to set the ACL of a file.',
            'C. ACLs can be used to manage permissions of a file for specific users and user groups.',
            'D. The "chacl" command is used to modify the ACL of a file.'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: 'pre-30',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements are true about the "touch" command? (Multiple-answer)',
        options: [
            'A. The "touch" command can be used to modify file timestamps.',
            'B. The "touch" command can be used to create empty files.',
            'C. The "touch" command can be used to clear file contents.',
            'D. The "touch" command can be used to modify the file inodes.'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: 'pre-31',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements are true about schemas in openGauss?',
        options: [
            'A. When a user is created, the system automatically creates a schema with the same name as the user.',
            'B. Database objects with the same name can exist in different schemas of the same database without causing conflicts.',
            'C. Schemas help multiple users operate the same database without interference.',
            'D. By default, each database has a schema named "public."'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-32',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements are true about the advantages of tablespaces?',
        options: [
            'A. A tablespace corresponds to a file system directory; you must have the read and write permissions on an empty directory.',
            'B. Any table in the database can have multiple tablespaces. You can specify the tablespaces to be used.',
            'C. If the partition or volume where the database is located is full and cannot be scaled out, you can create tablespaces in other partitions until the system space is reconfigured.',
            'D. Tablespaces enable administrators to arrange storage locations based on object usage modes, optimizing performance.'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-33',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following system catalogs or views can be used to query permission information in a database?',
        options: [
            'A. information_schema.table_privileges',
            'B. pg_user',
            'C. pg_authid',
            'D. pg_shdepend'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre-34',
        phase: 'Preliminary Stage 2024-2025',
        text: 'Which of the following statements are true about common performance testing methods?',
        options: [
            'A. Load testing is to measure the capacity of a system by continuously increasing the load until the system performance bottlenecks or resources are saturated.',
            'B. Reliability testing is to load a certain service pressure and run continuously for a period of time to test whether the system can run stably, focusing on the instantaneous pressure capacity of the system.',
            'C. Stress testing is to test the processing capacity of the system under a certain saturated state, usually set to a high CPU and memory usage rate to test the stability of the system.',
            'D. Benchmark testing is to quantitatively and comparatively test a performance metric of a test object by designing scientific test methods, test tools, and test systems.'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre-35',
        phase: 'Preliminary Stage 2024-2025',
        text: 'In drive I/O subsystem tuning, which of the following options are key tuning strategies?',
        options: [
            'A. Memory and cache optimization: Reasonably allocate memory for caching to reduce drive access frequency.',
            'B. File system and block device management: Choose a high-performance file system and adjust block device parameters to improve I/O efficiency.',
            'C. Network storage configuration: Optimize network storage configurations such as the number of connections and bandwidth allocation to improve remote access speed.',
            'D. I/O scheduling and prefetch strategy: Choose an appropriate I/O scheduling algorithm and implement a file prefetch strategy to improve drive access order and efficiency.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    }
];
