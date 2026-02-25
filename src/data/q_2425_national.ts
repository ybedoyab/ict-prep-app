import { Question } from './types';

export const y2425NationalQuestions: Question[] = [
    {
        id: '2425-nat-1',
        phase: '2024-2025 National',
        text: 'Which of the following statements is true about openGauss installation and deployment?',
        options: [
            'A. During the openGauss installation, you need to set proper database parameters based on the actual environment, such as memory allocation and storage path.',
            'B. Before installing openGauss, you do not need to check whether the hardware configuration of the server meets the requirements because openGauss has low requirements on hardware.',
            'C. After decompressing the openGauss installation package, you can directly run the installation program without worrying about the OS version compatibility.',
            'D. During the openGauss installation, you do not need to configure any network parameters. It automatically obtains the network configuration.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-2',
        phase: '2024-2025 National',
        text: 'Which of the following statements is true about the openGauss community ecosystem?',
        options: [
            'A. The openGauss community does not allow external contributors to commit code or provide improvement suggestions.',
            'B. The openGauss community provides a rich ecosystem, including but not limited to documents, tools, plug-ins, and training materials.',
            'C. The activities of the openGauss community are limited to online activities. There are no offline communication activities.',
            'D. The openGauss community supports only enterprise users and does not open resources to individual developers.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2425-nat-3',
        phase: '2024-2025 National',
        text: 'In openGauss, to ensure user access security, an administrator needs to set proper authentication rules in the "pg_hba.conf" configuration file. Assume that you want to allow user "admin" from a specific IP address 192.168.1.100 to use the SHA-256 password hash for authentication and access the database named testdb. In addition, user admin must use the SSL connection. Which of the following rules should be added to the "pg_hba.conf" file?',
        options: [
            'A. hostssl testdb admin 192.168.1.100/32 sha256',
            'B. hostssl testdb admin 192.168.1.100/32 md5',
            'C. host testdb admin 192.168.1.100/32 sha256',
            'D. host testdb admin 192.168.1.100/32 md5'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-4',
        phase: '2024-2025 National',
        text: 'In openGauss, which of the following threads is used to start the corresponding sub-threads when necessary to perform cleanup and recycling and reset the thread after the backend thread breaks down?',
        options: [
            'A. AutoVacLauncher',
            'B. GaussMaster',
            'C. AutoVacWorker',
            'D. Log Writer'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2425-nat-5',
        phase: '2024-2025 National',
        text: 'In openGauss, which of the following technologies is used to improve the efficiency and reliability of the log replay mechanism and can be adjusted using the "recovery_max_workers" parameter?',
        options: [
            'A. Serial log flushing',
            'B. Single-thread parallel replay',
            'C. Asynchronous log application',
            'D. Multi-thread parallel replay'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2425-nat-6',
        phase: '2024-2025 National',
        text: 'Assume you are trying to optimize a large enterprise-grade Java application deployed on the server with the Kunpeng 920 processor. Recently, you have noticed slow response and low throughput in peak hours. One cause may be a performance bottleneck in the Java virtual machine (JVM). To resolve these problems, you use the Kunpeng DevKit Java Profiler for in-depth analysis. Which of the following is not provided by Java Profiler and is least relevant to directly locating and solving JVM performance problems?',
        options: [
            'A. Analyze source code-level performance bottlenecks and provide optimization suggestions.',
            'B. Analyze heap memory snapshots for locating memory leakage and allocation problems.',
            'C. Analyze thread information in real time, including thread status and deadlock detection.',
            'D. Monitor database connection pool status and provide optimization suggestions.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2425-nat-7',
        phase: '2024-2025 National',
        text: 'When the Kunpeng GCC compiler is used for software development, which of the following statements about function inlining is true?',
        options: [
            'A. When the "-O2" optimization level is set, the compiler automatically identifies and inlines all static functions that are called only once in the program.',
            'B. The "always_inline" attribute ensures the compiler forcibly inlines specified functions during compilation.',
            'C. When the "inline" keyword is used, the compiler will inline the corresponding functions.',
            'D. The "noinline" attribute is only a suggestion for the compiler to ignore specific functions during inlining.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2425-nat-8',
        phase: '2024-2025 National',
        text: 'The performance optimization solution of Kunpeng BoostKit for Virtualization for TaiShan 200 servers covers multiple levels. Which of the following measures is specific to the virtualization environment and directly improves virtual machine (VM) resource allocation efficiency and performance?',
        options: [
            'A. Upgrade the GCC compiler to the latest version for better compilation performance.',
            'B. Apply the core binding policy to VMs to ensure the VMs run on specified physical CPU cores.',
            'C. Adjust the BIOS configurations to check the hardware validity, including the memory refresh frequency.',
            'D. Disable the transparent huge page function at the OS layer to reduce the memory management overhead.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2425-nat-9',
        phase: '2024-2025 National',
        text: 'In complex software porting scenarios, especially when the x86 architecture is changed to Kunpeng, developers need to identify the factors that directly trigger compilation errors or alarms. Which of the following factors does not directly cause compilation errors or alarms?',
        options: [
            'A. The data representation, alignment rules and byte sequence differ between the source and target architectures.',
            'B. The Maven version of the build tool is too early.',
            'C. The compiler configurations are not adapted to the target platform, such as the instruction set or processor.',
            'D. The code integrates assembly instructions or inline assembly code snippets unique to the x86 architecture.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-10',
        phase: '2024-2025 National',
        text: 'Assume you are processing a large number of credit assessment tasks at a financial company. Your team is considering using the machine learning algorithm library of Kunpeng BoostKit for Big Data to improve computing performance. Which of the following reasons is not a reason for choosing the Kunpeng BoostKit?',
        options: [
            'A. The Kunpeng BoostKit provides multiple algorithms, such as classification and regression, recommendation, feature engineering, pattern mining, and outlier detection, to meet the diversified requirements of the financial sector.',
            'B. The Kunpeng BoostKit second-order optimizer reduces computing complexity and accelerates model training.',
            'C. The Kunpeng BoostKit significantly reduces code modification and improves performance through simple configurations.',
            'D. The Kunpeng BoostKit supports all Spark MLlib algorithms without learning new APIs.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2425-nat-11',
        phase: '2024-2025 National',
        text: 'In a Kunpeng-based cloud computing data center, a system administrator finds that network throughput is a major bottleneck, especially during periods of high-concurrency network connections. Which of the following optimization measures is most likely to achieve significant performance improvement?',
        options: [
            'A. Enable the multi-queue Receive-Side Scaling (RSS) function for a network interface card (NIC).',
            'B. Adjust the maximum payload of transaction layer packet (TLP) of the PCIe bus.',
            'C. Minimize the non-uniform memory access (NUMA) across nodes in applications.',
            'D. Tune the Transmission Control Protocol (TCP) parameters, including the congestion control algorithm and retransmission timeout interval.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-12',
        phase: '2024-2025 National',
        text: 'After software is ported to the Kunpeng platform, it undergoes tests to ensure its stability and performance. Which of the following statements describes the purpose of a reliability test?',
        options: [
            'A. To measure the maximum capacity of the system, identify bottlenecks, and improve system performance.',
            'B. To simulate user operations and increase system load until the performance bottleneck is identified or resources are used up.',
            'C. To design and perform quantitative and comparable methods on a specific performance metric.',
            'D. To load certain service pressure and keep the system running for a period of time to check whether the system can run stably.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2425-nat-13',
        phase: '2024-2025 National',
        text: 'Which operations follow decoding in the Arm-based pipeline execution sequence of the Kunpeng platform?',
        options: [
            'A. Execution and memory access',
            'B. Memory access and execution',
            'C. Execution and data buffering',
            'D. Data preprocessing and execution'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-14',
        phase: '2024-2025 National',
        text: 'In normal mode of Vim in openEuler, which shortcut key allows you to enter insert mode and start inserting content after the character where the cursor is positioned?',
        options: [
            'A. u',
            'B. o',
            'C. i',
            'D. a'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2425-nat-15',
        phase: '2024-2025 National',
        text: 'When Vim is used to edit text in openEuler, what is the function of the "Ctrl+r" key combination?',
        options: [
            'A. Redo the previous operation',
            'B. Undo the previous operation',
            'C. Copy',
            'D. Paste'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-16',
        phase: '2024-2025 National',
        text: 'What is the core startup service of Samba?',
        options: [
            'A. smb',
            'B. dns',
            'C. samba',
            'D. nmb'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-17',
        phase: '2024-2025 National',
        text: 'After the host name is modified in openEuler, executing which of the following commands will make the change effective?',
        options: [
            'A. source ~/.bashrc',
            'B. netstat -nltp',
            'C. source /etc/profile',
            'D. cat /etc/hosts'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-18',
        phase: '2024-2025 National',
        text: 'Which of the following parameters represents the gateway address in the NIC configuration file in openEuler?',
        options: [
            'A. NETMASK',
            'B. IPADDR',
            'C. BROADCAST',
            'D. GATEWAY'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2425-nat-19',
        phase: '2024-2025 National',
        text: 'After the "chmod 547 file.txt" command is used to modify file permissions, which of the following is the resulting permissions on the file?',
        options: [
            'A. r-xr--rwx',
            'B. rw r r',
            'C. rwxr--rw-',
            'D. rwxr--r--'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-20',
        phase: '2024-2025 National',
        text: 'Which command can be used to find all lines starting with "A" in the file named "file"?',
        options: [
            'A. grep \'^A\' file',
            'B. find \\A file',
            'C. grep -n A file',
            'D. wc -l A < file'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-21',
        phase: '2024-2025 National',
        text: 'In Linux, which directory typically stores binary files, such as commands?',
        options: [
            'A. /root',
            'B. /bin',
            'C. /home',
            'D. /tmp'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2425-nat-22',
        phase: '2024-2025 National',
        text: 'If the administrator wants the "sdd2" partition to be automatically mounted to "/mnt/file" at boot time, which configuration file should be modified?',
        options: [
            'A. /etc/fstab',
            'B. /etc/fstba',
            'C. /etc/fstab.conf',
            'D. /etc/fstba.conf'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-23',
        phase: '2024-2025 National',
        text: 'Which of the following statements cannot be used for flow control of loops in shell scripts?',
        options: [
            'A. go',
            'B. until',
            'C. for',
            'D. while'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-24',
        phase: '2024-2025 National',
        text: 'When the CPU usage is high in openEuler, which command can be used with the "top" command to locate the fault caused by the high "wa" value?',
        options: [
            'A. ps aux',
            'B. free',
            'C. iotop',
            'D. netstat'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2425-nat-25',
        phase: '2024-2025 National',
        text: 'In openGauss, which of the following is the default folder for WALs?',
        options: [
            'A. global',
            'B. pg_audit',
            'C. pg_xlog',
            'D. pg_log'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2425-nat-26',
        phase: '2024-2025 National',
        text: 'In openGauss, which of the following technologies implements node scaling?',
        options: [
            'A. NUMA-Aware',
            'B. GTM-lite',
            'C. Scale-out',
            'D. Cluster HA'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2425-nat-27',
        phase: '2024-2025 National',
        text: 'In openGauss, which of the following functions can be used to calculate the center of a rectangle?',
        options: [
            'A. center(box)',
            'B. point(box)',
            'C. line(box)',
            'D. lseg(box)'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-28',
        phase: '2024-2025 National',
        text: 'Which of the following can be used to view partition information and system catalogs?',
        options: [
            'A. pg_class',
            'B. pg_index',
            'C. pg_tables',
            'D. pg_partition'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2425-nat-29',
        phase: '2024-2025 National',
        text: 'Which of the following statements is true about the behavior of the RESTRICT attribute when you try to delete an index in openGauss?',
        options: [
            'A. The RESTRICT attribute does not take effect when an index is deleted because the index is a separate part...',
            'B. When deleting an index, you can explicitly specify the RESTRICT attribute to ensure that no other objects...',
            'C. When deleting an index, openGauss automatically checks and deletes all objects that depend on the index...',
            'D. When deleting an index, openGauss uses the RESTRICT attribute by default to prevent objects that depend on the index from being deleted unexpectedly.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2425-nat-30',
        phase: '2024-2025 National',
        text: 'Which of the following can be used to run the same command on multiple database nodes?',
        options: [
            'A. gs_om',
            'B. gs_guc',
            'C. gs_ssh',
            'D. gs_check'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2425-nat-31',
        phase: '2024-2025 National',
        text: 'Which of the following is used to delete all information about students whose ages are less than 7 from the students table?',
        options: [
            'A. DELETE FROM students WHERE age<7;',
            'B. DELETE * FROM students WHERE age<7;',
            'C. DELETE * FROM students ON age<7;',
            'D. DELETE FROM students ON age<7;'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-32',
        phase: '2024-2025 National',
        text: 'In openEuler, which of the following commands can be used to query the remaining drive space?',
        options: [
            'A. top',
            'B. du',
            'C. df',
            'D. cat'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2425-nat-33',
        phase: '2024-2025 National',
        text: 'In openEuler, what is the effect of "2>&1" appended to a command to execute?',
        options: [
            'A. Standard output is redirected to standard input.',
            'B. Standard error output is redirected to standard output.',
            'C. Standard output is redirected to standard error output.',
            'D. Standard input is redirected to error output.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2425-nat-34',
        phase: '2024-2025 National',
        text: 'Which of the following projects is not incubated in the openEuler community?',
        options: [
            'A. secPeaver',
            'B. A-Ops',
            'C. k3s',
            'D. iSulad'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2425-nat-35',
        phase: '2024-2025 National',
        text: 'In openEuler, which of the following commands can be used to view the change history of a specified RPM package?',
        options: [
            'A. rpm -q --changelog *.rpm',
            'B. rpm -Vc *.rpm',
            'C. rpm --changelog *.rpm',
            'D. rpm -qpil *.rpm'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-36',
        phase: '2024-2025 National',
        text: 'Regarding the character functions in Linux shell scripts, which of the following statements is false?',
        options: [
            'A. "\\" is a path separator.',
            'B. ":" indicates a string reference.',
            'C. "#" indicates comments.',
            'D. "!" indicates negation.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-37',
        phase: '2024-2025 National',
        text: 'Which of the following statements is false about shell commands in openEuler?',
        options: [
            'A. Run "echo $?" to view the current shell.',
            'B. Run "cat /etc/shells" to query the default shells installed in the system after you log in to openEuler.',
            'C. Run "./my_script.sh &" to execute the "my_script.sh" shell script in the background.',
            'D. Run "echo $SHELL" to view the default shell of the current user.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-38',
        phase: '2024-2025 National',
        text: 'Which of the following commands prints the 99th line of "file1"?',
        options: [
            'A. head -n 99 file1 | tail -1',
            'B. head -n 99 file1',
            'C. tail -n 99 file1 | head -1',
            'D. tail +99 file1'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2425-nat-39',
        phase: '2024-2025 National',
        text: 'In Linux, environment variables that apply to all users should be configured in which of the following files?',
        options: [
            'A. ~/.bash_profile',
            'B. /etc/profile',
            'C. /etc/bashrc',
            'D. /etc/skel/.bashrc'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2425-nat-40',
        phase: '2024-2025 National',
        text: 'What is the default port number for the iSCSI service?',
        options: [
            'A. 25',
            'B. 3280',
            'C. 111',
            'D. 3260'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2425-nat-41',
        phase: '2024-2025 National',
        text: 'Which of the following statements are true about the advantages of the openGauss multi-thread architecture?',
        options: [
            'A. Inter-thread communication in the multi-thread architecture is faster and more convenient than inter-process communication.',
            'B. The multi-thread architecture uses multiple CPUs to execute multiple closely related tasks in parallel, improving performance.',
            'C. The thread startup overhead is greater than the process startup overhead.',
            'D. Threads share the same address space, facilitating data sharing and communication.'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-42',
        phase: '2024-2025 National',
        text: 'Which of the following statements are true about the openGauss compute engine?',
        options: [
            'A. An executor is responsible for SQL query and data processing and is the last process of the computing engine.',
            'B. An SQL interpreter parses SQL statements entered by users into computing models.',
            'C. An optimizer is used to convert SQL queries into random execution plans.',
            'D. The computing engine is mainly responsible for query computing and data processing.'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-43',
        phase: '2024-2025 National',
        text: 'Which of the following statements are true about tablespace management in openGauss?',
        options: [
            'A. You can run the ALTER TABLESPACE statement to modify the attributes of a tablespace.',
            'B. A tablespace can contain only one data file.',
            'C. When creating a tablespace, you need to specify the location of the corresponding file system.',
            'D. Tablespaces can be used to organize and manage physical storage in a database.'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-44',
        phase: '2024-2025 National',
        text: 'Which of the following are DML commands?',
        options: [
            'A. delete',
            'B. alter',
            'C. drop',
            'D. update'
        ],
        correctAnswers: ['A', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-45',
        phase: '2024-2025 National',
        text: 'A software company is considering where to release its newly developed applications. The company wants to utilize resources in open source communities to improve its popularity while ensuring private control on core code. Which of the following release methods are appropriate?',
        options: [
            'A. Private repository: Create a private repository of the company to store and distribute images of core code, preventing sensitive information from being disclosed.',
            'B. App stores: Release the compiled application to open source app stores and define the usage and scope of the application.',
            'C. Open source organizations: Join open source organizations and release application images in their image repositories as per community processes and standards.',
            'D. Limited open source: Create a private repository on GitHub and invite specific developers or teams to share some code and development progress.'
        ],
        correctAnswers: ['B', 'C'],
        type: 'multi'
    },
    {
        id: '2425-nat-46',
        phase: '2024-2025 National',
        text: 'To improve concurrency in low latency conditions, a company wants to deploy its HPC applications on the Kunpeng 920 platform. Which of the following are characteristics of the Kunpeng 920 processor that help achieve this goal?',
        options: [
            'A. Increases the network interface bandwidth from 25 Gbit/s to 100 Gbit/s.',
            'B. Upgrades the PCIe standard from 3.0 to 4.0 to double the transmission rate.',
            'C. Increases the number of memory channels from 4 to 8.',
            'D. Adopts the complex instruction set architecture to improve processing efficiency.'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2425-nat-47',
        phase: '2024-2025 National',
        text: 'The Kunpeng DevKit Affinity Analyzer can improve performance of applications on the Kunpeng platform. Which of the following statements are true about the functions of the Affinity Analyzer?',
        options: [
            'A. Analyzes and optimizes the performance of x86-based applications.',
            'B. Checks and optimizes byte alignment in the source code.',
            'C. Cannot perform calculation precision analysis which requires cross-platform support.',
            'D. Identifies code snippets that can be vectorized and matricized and provides optimization suggestions.'
        ],
        correctAnswers: ['B', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-48',
        phase: '2024-2025 National',
        text: 'Which of the following are basic acceleration features of Kunpeng BoostKit for Database?',
        options: [
            'A. NVMe SSD atomic write',
            'B. CRC32 instruction optimization',
            'C. Gazelle network optimization',
            'D. Kunpeng GCC CFGO'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: '2425-nat-49',
        phase: '2024-2025 National',
        text: 'In a Kunpeng-based big data environment, which of the following are performance improvements enabled by OmniRuntime?',
        options: [
            'A. Efficient data processing. OmniData facilitates storage-compute collaboration and accelerates data filtering and preprocessing, reducing data transmission overhead.',
            'B. Inclusive ecosystem. Big data components such as openLooKeng, Spark, Hive, and Flink are integrated as acceleration libraries, and development in multiple languages is supported, streamlining the development process.',
            'C. High computing performance. OmniOperator provides efficient operators to maximize computing power by using Kunpeng hardware features.',
            'D. Automatic data repair and backup'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2425-nat-50',
        phase: '2024-2025 National',
        text: 'Which of the following statements are true about Kunpeng BoostKit?',
        options: [
            'A. Kunpeng BoostKit is an independent third-party software package that does not rely on Kunpeng hardware or specific OSs.',
            'B. Kunpeng BoostKit is a full-stack solution designed for the Kunpeng platform, containing optimization features for hardware, base software, and application software.',
            'C. Kunpeng BoostKit integrates high performance open source components optimized for the Kunpeng platform to improve overall performance.',
            'D. Kunpeng BoostKit can improve front-end performance of web applications and does not involve back-end processing or database optimization.'
        ],
        correctAnswers: ['B', 'C'],
        type: 'multi'
    },
    {
        id: '2425-nat-51',
        phase: '2024-2025 National',
        text: 'Which of the following statements are true about the Kunpeng 920 processor?',
        options: [
            'A. Currently, a single server supports up to 512 physical cores.',
            'B. The number of cores of a single processor can be 24, 32, 48, or 64.',
            'C. The Huawei-developed cores are compatible with the Armv8.2 architecture and can run at a maximum frequency of 2.6 GHz.',
            'D. A single processor includes two CPU dies and one I/O die, with each CPU die supporting up to 32 cores.'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-52',
        phase: '2024-2025 National',
        text: 'Which of the following community organizations participate in openEuler version operations?',
        options: [
            'A. Release SIG',
            'B. Council',
            'C. Technical Committee',
            'D. QA SIG'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-53',
        phase: '2024-2025 National',
        text: 'In openEuler, which of the following statements are true about the Bash shell?',
        options: [
            'A. The Bash shell supports redirection of command input and output.',
            'B. The Bash shell supports command history.',
            'C. The Bash shell does not support command aliases.',
            'D. Bash does not support command variable assignment.'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: '2425-nat-54',
        phase: '2024-2025 National',
        text: 'In openEuler, which of the following commands can close a file in Vim?',
        options: [
            'A. :e!',
            'B. :wq',
            'C. :we',
            'D. :q!'
        ],
        correctAnswers: ['B', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-55',
        phase: '2024-2025 National',
        text: 'In openEuler, in addition to digits, which of the following special characters can be used as parameters of crontab entries?',
        options: [
            'A. ,',
            'B. /',
            'C. *',
            'D. -'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-56',
        phase: '2024-2025 National',
        text: 'In openEuler, which of the following methods permanently set the host name?',
        options: [
            'A. Modifying the "/etc/profile" file',
            'B. hostname <new-name>',
            'C. Modifying the "/etc/hostname" file',
            'D. hostnamectl set-hostname <new-name>'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-57',
        phase: '2024-2025 National',
        text: 'If the file sharing service is unavailable when you are using Samba, which of the following are the possible causes?',
        options: [
            'A. The access to the file sharing server is restricted due to user expiration.',
            'B. No permission to access or create files due to incorrect configuration of shared directory permissions.',
            'C. The file sharing server cannot be started due to incorrect configuration.',
            'D. The file sharing server cannot be accessed due to a network connection failure.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-58',
        phase: '2024-2025 National',
        text: 'Which of the following commands can display file contents?',
        options: [
            'A. more',
            'B. head',
            'C. less',
            'D. jon'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2425-nat-59',
        phase: '2024-2025 National',
        text: 'iptables is a powerful network traffic control tool in Linux. It implements filtering, modification, and address translation of data packets using four tables and five chains. Which of the following options are included in the four tables of iptables?',
        options: [
            'A. mangle',
            'B. nat',
            'C. input',
            'D. raw'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-60',
        phase: '2024-2025 National',
        text: 'Which of the following are system views in openGauss?',
        options: [
            'A. PG_TABLES',
            'B. PG_STATS',
            'C. PLAN_TABLE',
            'D. PLAN_VIEWS'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: '2425-nat-61',
        phase: '2024-2025 National',
        text: 'Which of the following are openGauss query optimization steps?',
        options: [
            'A. Row estimation',
            'B. Statistics collection',
            'C. Cost estimation',
            'D. Path search'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-62',
        phase: '2024-2025 National',
        text: 'Which of the following are openGauss backend threads?',
        options: [
            'A. Log writer thread',
            'B. Checkpoint thread',
            'C. Statistics thread',
            'D. Archive thread'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-63',
        phase: '2024-2025 National',
        text: 'Which of the following statements are true about the SQL execution plan in openGauss?',
        options: [
            'A. Each node in the execution plan represents a database operator, and the optimizer attempts to minimize the total execution overhead.',
            'B. The SQL execution plan is a node tree, which displays detailed procedures when openGauss runs an SQL statement.',
            'C. You can run the EXPLAIN command to view the execution plan generated by the optimizer for each query. However, the EXPLAIN command itself executes SQL statements.',
            'D. The EXPLAIN ANALYZE statement generates an execution plan and also executes the SQL statement and displays the execution summary.'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-64',
        phase: '2024-2025 National',
        text: 'Which of the following partitioning modes are supported by openGauss?',
        options: [
            'A. Hash partitioning',
            'B. List partitioning',
            'C. Composite partitioning',
            'D. Range partitioning'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-65',
        phase: '2024-2025 National',
        text: 'In openEuler, which of the following commands can be used to check if a certain software package has been installed?',
        options: [
            'A. rpm -qa <package>',
            'B. dnf list installed | grep <package>',
            'C. dnf installed <package>',
            'D. rpm -qw <package>'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: '2425-nat-66',
        phase: '2024-2025 National',
        text: 'Which of the following are SIG member roles in the openEuler community?',
        options: [
            'A. Contributor',
            'B. Committer',
            'C. Developer',
            'D. Maintainer'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-67',
        phase: '2024-2025 National',
        text: 'Which of the following statements are true about the "find" command in Linux?',
        options: [
            'A. "find" only searches the first level of subdirectories in the specified directory.',
            'B. find /home -size +1024k searches for files larger than 1 MB in the "home" directory.',
            'C. find /home -name "class*" searches for all files and directories in the "home" directory that start with "class".',
            'D. find /home -user lisi searches for all files and directories in the "home" directory owned by "lisi".'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-68',
        phase: '2024-2025 National',
        text: 'Which of the following statements are false about parent and child processes?',
        options: [
            'A. If the parent process modifies the value of a global variable, the corresponding value in the child process will also be modified.',
            'B. Parent and child processes share the same address space.',
            'C. If the parent process has ended but the child process is still running, the child process is an orphan process and will be adopted by the init process.',
            'D. Child processes can access all stack data of the parent process.'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-69',
        phase: '2024-2025 National',
        text: 'Which of the following commands are used to delete multiple .c files in the current directory?',
        options: [
            'A. find . -name "*.c" | xargs rm',
            'B. find . -name "*.c" -maxdepth 1 | xargs rm',
            'C. find / -name "*.c" | xargs rm',
            'D. rm *.c'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2425-nat-70',
        phase: '2024-2025 National',
        text: 'Which of the following statements are true about "$" in shell scripts?',
        options: [
            'A. "$#" represents the number of parameters passed to the script.',
            'B. In shell scripts, "$*" and "$@" behave the same if they are not quoted in double quotation marks (""). They both treat each received parameter as one piece of data, separated by spaces.',
            'C. "$$" represents the ID of the last process running in the background.',
            'D. "$!" represents the ID of the process that runs the script.'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: '2425-nat-71',
        phase: '2024-2025 National',
        text: 'Use GRANT to revoke permissions from users if the permissions are no longer required.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2425-nat-72',
        phase: '2024-2025 National',
        text: 'Database permissions are used to control users or roles to perform specific operations on database objects in the database management system. Database permissions are classified into system permissions and object permissions.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2425-nat-73',
        phase: '2024-2025 National',
        text: 'In openGauss, once the security audit function is enabled, all user operations on all database objects are automatically audited, and specific operations or users cannot be audited selectively.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2425-nat-74',
        phase: '2024-2025 National',
        text: 'Stored procedures can accept input and output parameters to transfer data.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2425-nat-75',
        phase: '2024-2025 National',
        text: 'In openEuler, the swap space can be a partition or a file. It is primarily used when physical memory resources are tight, storing infrequently accessed data from memory to the drive to free up physical memory. Therefore, the main role of the swap space is to reduce the total amount of virtual memory in the system.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2425-nat-76',
        phase: '2024-2025 National',
        text: 'The "no_root_squash" parameter means that the "root" user is granted the root permissions after logging in to the NFS server.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2425-nat-77',
        phase: '2024-2025 National',
        text: 'In the static resource permission settings of an Apache HTTP server, "FollowSymLinks" allows access to the source files of symbolic links in a directory, and a "-" prefix before the parameter disables this feature.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2425-nat-78',
        phase: '2024-2025 National',
        text: 'In the AArch64 architecture, the path to the "grub.cfg" file is "/boot/grub2/grub.cfg".',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2425-nat-79',
        phase: '2024-2025 National',
        text: 'The basic function of firewalld is to control access to and from the network, safeguarding the specific network from attacks by untrusted networks.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2425-nat-80',
        phase: '2024-2025 National',
        text: 'In a development environment powered by the Kunpeng 920 processor, developers find that the memory usage increases abnormally when testing applications. In this case, the DevKit system diagnosis tool can help developers detect memory leaks in the source code.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2425-nat-81',
        phase: '2024-2025 National',
        text: 'On the Kunpeng platform, the BiSheng Compiler uses the "udot" instruction to perform the dot product operation. This instruction replaces the original scalar instruction and accumulates multiple channels of 8-bit data to 32-bit data, significantly improving x264 computing efficiency. In addition, the compiler uses the "urhadd" instruction to perform summing and averaging, which reduces operation instructions in a loop and improves overall loop efficiency.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2425-nat-82',
        phase: '2024-2025 National',
        text: 'When installing ExaGear on an x86 server, you can update the binfmt_misc component of Linux to register the parser of Kunpeng applications as ExaGear. This installation enables two major components: instruction translation engine and Kunpeng operating environment.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2425-nat-83',
        phase: '2024-2025 National',
        text: 'The Kunpeng 920 processor architecture consists of two CPU dies and one I/O die. Each CPU die can have up to 32 high-performance cores and 4 built-in DDR4 memory controllers for high-speed data access. The I/O die offers an advanced storage controller, PCIe and high-speed Ethernet interfaces, an interface for cache consistency between dies, and a hardware acceleration engine designed to improve performance of specific tasks.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2425-nat-84',
        phase: '2024-2025 National',
        text: 'An openEuler Long Term Support (LTS) version is released every year.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2425-nat-85',
        phase: '2024-2025 National',
        text: 'In openEuler, after you run the "su" command to switch from the "root" user to a common user, you need to enter the user password.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2425-nat-86',
        phase: '2024-2025 National',
        text: 'In openGauss, multiple NULL values can be inserted into a column that contains a unique index.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2425-nat-87',
        phase: '2024-2025 National',
        text: 'When the usage of the disk where the tablespace is located reaches 60%, the database automatically sets the tablespace to read-only mode to ensure data security.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2425-nat-88',
        phase: '2024-2025 National',
        text: 'In openEuler, a larger nice value of a process indicates a higher priority.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2425-nat-89',
        phase: '2024-2025 National',
        text: 'When you create an anonymous mapping in openEuler, the file descriptor ("fd") should ideally be set to -1.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2425-nat-90',
        phase: '2024-2025 National',
        text: 'In openEuler, the "crontab" command is used to install, remove, or display the tables used to drive the cron daemon. Users place command sequences to be executed in the crontab file. All users share a single crontab file.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    }
];
