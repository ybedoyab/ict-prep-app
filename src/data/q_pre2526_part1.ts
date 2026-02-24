import type { Question } from './types';

export const pre2526QuestionsPart1: Question[] = [
    {
        id: 'pre2526-1',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following commands is used to delete the crond service of a user?',
        options: ['A. crontab -e', 'B. crontab -u', 'C. crontab -r', 'D. crontab -l'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre2526-2',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following special characters is used for escaping in a shell script?',
        options: ['A. #', 'B. !', 'C. /', 'D. \\\\'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre2526-3',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following shell script commands is used to append standard output to the end of a file?',
        options: ['A. ls < dir_log', 'B. ls > dir_log', 'C. ls >> dir_log', 'D. ls << dir_log'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre2526-4',
        phase: '2025-2026 Preliminary Exam',
        text: 'In a shell script, which of the following options is not a loop statement?',
        options: ['A. end', 'B. until', 'C. while', 'D. for'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre2526-5',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following commands enables drive partitioning in script mode?',
        options: ['A. parted -i', 'B. parted -v', 'C. parted -h', 'D. parted -s'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre2526-6',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following options is used to forcibly delete a file without confirmation?',
        options: ['A. -r', 'B. -f', 'C. -i', 'D. -v'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-7',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following commands is used to search for all .txt files in the current directory?',
        options: ['A. find / -name .txt', 'B. find . -name ".txt"', 'C. find . -iname ".txt"', 'D. find . -type f -name ".txt"'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-8',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following commands creates a hard link named "hardlink.txt" for the "source.txt" file?',
        options: ['A. ln -i source.txt hardlink.txt', 'B. ln source.txt hardlink.txt', 'C. ln -h source.txt hardlink.txt', 'D. ln -s source.txt hardlink.txt'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-9',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements about the relationship between access control lists (ACLs) and traditional permissions is true?',
        options: [
            'A. After ACLs are configured, traditional permissions become invalid.',
            'B. Only files can be configured with ACLs, not directories.',
            'C. Traditional permissions are a subset of ACLs that allow refined permissions management.',
            'D. ACLs override traditional permissions. The two types of permission models are not associated with each other.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre2526-10',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following is a high-risk operation in the openGauss database?',
        options: ['A. Dropping indexes', 'B. Modifying the system catalog', 'C. Modifying the table structure', 'D. Clearing a partitioned table'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-11',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following is the main function of the system catalog pg_class?',
        options: [
            'A. Stores database role permissions',
            'B. Stores database object information',
            'C. Stores database user information',
            'D. Stores database session information'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-12',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which scenario do openGauss column-store tables apply to?',
        options: ['A. Statistical analysis query', 'B. Point query', 'C. Frequent data updates', 'D. Frequent data insertions'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre2526-13',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which is a function of the openGauss server tool gs_guc?',
        options: [
            'A. Backs up and restores database instances.',
            'B. Monitors real-time database performance metrics.',
            'C. Checks the compatibility between the OS and the database.',
            'D. Dynamically modifies database system parameters and connection authentication parameters.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'pre2526-14',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which tool can remotely run commands on all nodes in openGauss?',
        options: ['A. gs_guc', 'B. gs_ssh', 'C. gs_dump', 'D. gs_om'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-15',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which command can view the details of the system catalog pg_authid in openGauss?',
        options: ['A. \\d pg_authid', 'B. \\help pg_authid', 'C. \\describe pg_authid', 'D. SELECT * FROM pg_authid'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre2526-16',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following operations is required when porting a Python program from the x86 architecture to the Kunpeng platform?',
        options: [
            'A. Recompile all third-party dependency libraries for the new architecture.',
            'B. Modify the syntax of the Python source code.',
            'C. Adjust Python VM parameters, such as the heap memory size.',
            'D. Replace the original interpreter with the Python interpreter compatible with the Kunpeng architecture.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre2526-17',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following Kunpeng Java Profiler functions can be used to analyze object reference chains in the Java heap memory and locate memory leaks?',
        options: ['A. Heap snapshot analysis', 'B. GC analysis', 'C. Thread analysis', 'D. I/O analysis'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'pre2526-18',
        phase: '2025-2026 Preliminary Exam',
        text: 'During software porting to the Kunpeng platform, which of the following activities is not involved in the functional verification phase?',
        options: [
            'A. Adapting the delivery tool to the new platform',
            'B. Performing comprehensive functional testing to ensure all features operate correctly',
            'C. Carrying out comprehensive performance testing and tuning to achieve optimal performance',
            'D. Writing and compiling code to adapt to architectural requirements of the new platform'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'pre2526-19',
        phase: '2025-2026 Preliminary Exam',
        text: 'When building open source software for the Kunpeng platform using Maven repositories, which of the following statements is false?',
        options: [
            'A. Maven preferentially searches the local repository for required components.',
            'B. All external dependency libraries can be directly obtained from Maven repositories.',
            'C. Maven supports proxy configuration to accelerate downloads from remote repositories.',
            'D. If a required dependency is not found in the local repository, Maven downloads it from a configured remote repository.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'pre2526-20',
        phase: '2025-2026 Preliminary Exam',
        text: 'The Kunpeng 920 processor has multiple built-in hardware acceleration engines to enhance the execution efficiency of specific tasks. Which of the following is not a built-in acceleration function?',
        options: [
            'A. Graphics rendering acceleration',
            'B. Encryption algorithm acceleration',
            'C. Compression and decompression acceleration',
            'D. SSL encryption acceleration'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    }
];
