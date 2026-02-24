import { Question } from './types';

export const y2324QuestionsPart2: Question[] = [
    {
        id: '2324-24',
        phase: '2023-2024',
        text: 'Which of the following commands can be used to view the background tasks of the current shell?',
        options: ['A. cat', 'B. vim', 'C. jobs', 'D. bg'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-25',
        phase: '2023-2024',
        text: 'When creating a user in openEuler, which of the following options can be used to specify the home directory for the user?',
        options: ['A. -d', 'B. -p', 'C. -u', 'D. -c'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-26',
        phase: '2023-2024',
        text: 'Which of the following statements about the "/etc/fstab" configuration file are incorrect? (Multiple-answer)',
        options: [
            'A. The file is automatically generated after the system is started.',
            'B. The file is used to manage file system information.',
            'C. The file is used to set naming rules.',
            'D. The file holds hardware information.'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-27',
        phase: '2023-2024',
        text: 'Which of the following local file systems are supported by openEuler? (Multiple-answer)',
        options: ['A. ext4', 'B. btrfs', 'C. XFS', 'D. NFS'],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-28',
        phase: '2023-2024',
        text: 'Data Studio is an integrated development environment. Which of the following are features of Data Studio? (Multiple-answer)',
        options: [
            'A. Creating and managing database objects',
            'B. Executing SQL statements/scripts',
            'C. Editing and executing PL/SQL statements',
            'D. Viewing WDRs'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-29',
        phase: '2023-2024',
        text: 'In the openGauss database architecture design, what are the advantages of the primary/standby mode compared to the standalone mode? (Multiple-answer)',
        options: [
            'A. RPO and RTO can be controlled.',
            'B. Maximum reliability, performance, and availability can be achieved.',
            'C. Multiple failover and switchover modes are supported.',
            'D. Damaged pages can be automatically repaired.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-30',
        phase: '2023-2024',
        text: 'Which of the following statements about built-in variables in openEuler are true? (Multiple-answer)',
        options: [
            'A. "$0" indicates all shell parameters.',
            'B. "$n" ranges from 1 to 9.',
            'C. "$*" indicates all positional parameters.',
            'D. "$#" indicates the number of positional parameters.'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-31',
        phase: '2023-2024',
        text: 'Which of the following are correct usage examples of the route command in openEuler? (Multiple-answer)',
        options: [
            'A. route',
            'B. route print',
            'C. route add default gw 192.168.1.1',
            'D. route del -net 192.168.0.1 netmask 255.255.255.0'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-32',
        phase: '2023-2024',
        text: 'Which of the following are not the functions of the "chgrp" command? (Multiple-answer)',
        options: [
            'A. Configuring file permissions',
            'B. Changing the group',
            'C. Changing the owner',
            'D. Configuring umask'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-33',
        phase: '2023-2024',
        text: 'Which of the following statements about the commands are correct? (Multiple-answer)',
        options: [
            'A. cat /etc/os-release shows OS version',
            'B. lscpu shows CPU info',
            'C. lscpi shows hardware info',
            'D. cat /etc/fstab shows memory usage'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-34',
        phase: '2023-2024',
        text: 'Which of the following are health check scenarios? (Multiple-answer)',
        options: [
            'A. Before installation',
            'B. Automatic WAL checkpoints',
            'C. Pre-upgrade check',
            'D. Before important operations'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-35',
        phase: '2023-2024',
        text: 'Which of the following statements are true about the openGauss database? (Multiple-answer)',
        options: [
            'A. OM manages cluster operations',
            'B. CM provides O&M APIs',
            'C. Client driver handles requests',
            'D. Primary/standby DNs store and query data'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-36',
        phase: '2023-2024',
        text: 'In the openGauss fully-encrypted database, which of the following methods can be used to create an encrypted table? (Multiple-answer)',
        options: [
            'A. CREATE TABLE with encryption',
            'B. ALTER TABLE with encryption',
            'C. CREATE TABLESPACE with encryption',
            'D. pg_dump with encryption'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: '2324-37',
        phase: '2023-2024',
        text: 'Which of the following are configuration files of the SSH client? (Multiple-answer)',
        options: [
            'A. /etc/ssh/sshd_config',
            'B. /etc/ssh/ssh_config',
            'C. ~/.ssh/config',
            'D. /etc/ssh/sshd_config.d/*.conf'
        ],
        correctAnswers: ['B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-38',
        phase: '2023-2024',
        text: 'Which of the following tools can be used to implement logical backup of the openGauss database? (Multiple-answer)',
        options: [
            'A. LVM snapshot',
            'B. PITR',
            'C. gs_dump',
            'D. gs_dumpall'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-39',
        phase: '2023-2024',
        text: 'Which of the following statements are true about the openGauss database auxiliary thread? (Multiple-answer)',
        options: [
            'A. WAL writer writes WAL logs',
            'B. Page writer flushes dirty pages',
            'C. Checkpointer ensures consistency',
            'D. AutoVacuum collects statistics'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-40',
        phase: '2023-2024',
        text: 'Which of the following are the functions of the "systemctl" command? (Multiple-answer)',
        options: [
            'A. Collect serial port info',
            'B. Enable services at startup',
            'C. Start/stop services',
            'D. Restart/shutdown system'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-41',
        phase: '2023-2024',
        text: 'Which of the following commands can be used to view information about the CPUs, swap partition, and drives? (Multiple-answer)',
        options: [
            'A. cat /proc/cpuinfo',
            'B. du',
            'C. cat /proc/swaps',
            'D. df -h'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-42',
        phase: '2023-2024',
        text: 'Which of the following options can be configured on the openEuler installation page? (Multiple-answer)',
        options: [
            'A. Network and host name',
            'B. Time and date',
            'C. Software selection',
            'D. User environment variables'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-43',
        phase: '2023-2024',
        text: 'Which of the following statements are true about the openGauss table design? (Multiple-answer)',
        options: [
            'A. Planning prevents changes',
            'B. Small fill factor for Astore',
            'C. COMMENT not needed',
            'D. Clustering improves I/O'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2324-44',
        phase: '2023-2024',
        text: 'In which of the following situations a WDR cannot be generated? (Multiple-answer)',
        options: [
            'A. Node restart',
            'B. TRUNCATE TABLE',
            'C. Switchover',
            'D. DROP DATABASE'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-45',
        phase: '2023-2024',
        text: 'Which of the following commands cannot be used to format the "/dev/hdb6" partition? (Multiple-answer)',
        options: [
            'A. mkfs -t ext4 /dev/hdb6',
            'B. format -t ext4 /dev/hdb6',
            'C. mount -t ext4 /dev/hdb6',
            'D. makefile -t ext4 /dev/hdb6'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    }
];
