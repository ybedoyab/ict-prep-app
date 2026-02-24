import { Question } from './types';

export const y2324QuestionsPart1: Question[] = [
    {
        id: '2324-1',
        phase: '2023-2024',
        text: 'When the gs_checkperf tool is used, which of the following items can be viewed only by the "root" user?',
        options: ['A. Node level', 'B. Session/Process level', 'C. SSD performance', 'D. openGauss level'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-2',
        phase: '2023-2024',
        text: 'What open-source protocol does openGauss use?',
        options: ['A. MIT License', 'B. GNU General Public License', 'C. BSD License', 'D. Mulan PSL'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-3',
        phase: '2023-2024',
        text: 'Which of the following commands can be executed only by the root user?',
        options: ['A. gs_checkperf', 'B. gs_checkos', 'C. gs_check', 'D. gs_ssh'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-4',
        phase: '2023-2024',
        text: 'Which of the following is not a necessary component of the default SSH service of openEuler?',
        options: ['A. openssh', 'B. openssh-askpass', 'C. openssh-server', 'D. openssh-clients'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-5',
        phase: '2023-2024',
        text: 'Which of the following statements about periodic tasks is correct?',
        options: [
            'A. The "at" command can be used to set periodic tasks.',
            'B. The "crontab" command can be used to set periodic tasks.',
            'C. The "kill" command cannot be used to kill periodic tasks.',
            'D. The "job" command can be used to set periodic tasks.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-6',
        phase: '2023-2024',
        text: 'Which of the following drivers is used by the client connection tool Data Studio to communicate with the openGauss database?',
        options: ['A. JDBC', 'B. ODBC', 'C. Libpq', 'D. Psycopg'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-7',
        phase: '2023-2024',
        text: 'The openEuler administrator needs to set the permissions on a file as follows: the file owner has all permissions, the user group of the file owner has read and write permissions, and other users have read permission. Which of the following is the correct permission value?',
        options: ['A. 467', 'B. 674', 'C. 476', 'D. 764'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-8',
        phase: '2023-2024',
        text: 'Which of the following tools is used to help users understand the database workload of openGauss?',
        options: ['A. gs_checkos', 'B. gs_check', 'C. gs_checkperf', 'D. gs_collector'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-9',
        phase: '2023-2024',
        text: 'Which of the following functions is NOT provided by gs_guc?',
        options: [
            'A. Modify the client authentication policy.',
            'B. Modify parameter values in the configuration file.',
            'C. Check the parameters in the configuration file.',
            'D. Check the openGauss running status.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-10',
        phase: '2023-2024',
        text: 'Which of the following statements is true about the separation of duties of openGauss?',
        options: [
            'A. Database administrators (DBAs), application developers, and system administrators have the same permissions and responsibilities.',
            'B. The responsibilities of database management, data security, and database audit log viewing and management are assigned to different roles or users.',
            'C. The responsibilities between database instances, databases, and tablespaces are separated.',
            'D. Database read, write, and management operations are performed by different roles or users.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-11',
        phase: '2023-2024',
        text: 'In openEuler, which of the following characters is used to start a background process?',
        options: ['A. @', 'B. &', 'C. |', 'D. $'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-12',
        phase: '2023-2024',
        text: 'After an application is started in openEuler, which of the following commands can be used to set a priority for the corresponding process?',
        options: ['A. priority', 'B. nice', 'C. renice', 'D. setpri'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-13',
        phase: '2023-2024',
        text: 'Permissions of a file in Linux consist of four parts. Which of the following is represented by the third part?',
        options: [
            'A. File Type',
            'B. Permissions of the file owner',
            'C. Permissions of the group to which the file owner belongs',
            'D. Permissions of other users'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-14',
        phase: '2023-2024',
        text: 'When you create or update a user account in openGauss, which of the following options can improve account security?',
        options: [
            'A. Setting a simple password',
            'B. Allowing any IP address to log in',
            'C. Enabling SSL/TLS encrypted connection',
            'D. Disabling password policy check'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-15',
        phase: '2023-2024',
        text: 'Which of the following is the first step of the openEuler startup process?',
        options: ['A. System boot', 'B. Hardware self-check', 'C. Kernel start', 'D. System initialization'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-16',
        phase: '2023-2024',
        text: 'Which of the following is not an SSH client tool?',
        options: ['A. ssh', 'B. scp', 'C. rsync', 'D. sftp'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-17',
        phase: '2023-2024',
        text: 'Which of the following tools is used to check whether the environment meets the installation requirements before openGauss installation?',
        options: ['A. gs_checkos', 'B. gs_check', 'C. gs_checkperf', 'D. gs_collector'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-18',
        phase: '2023-2024',
        text: 'Which of the following is not a table of iptables?',
        options: ['A. filter', 'B. nat', 'C. mangle', 'D. INPUT'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-19',
        phase: '2023-2024',
        text: 'Which of the following statements is true about the logical replication feature of openGauss?',
        options: [
            'A. It supports primary-primary deployment and table-level replication.',
            'B. It converts binary logs to logical SQL statements and supports table-level replication.',
            'C. It supports primary-primary deployment and converts binary logs to logical SQL statements.',
            'D. It supports primary-primary deployment and table-level replication, and converts binary logs to logical SQL statements.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-20',
        phase: '2023-2024',
        text: 'How often is the openGauss WDR snapshot executed by default?',
        options: ['A. 30 minutes', 'B. 60 minutes', 'C. 120 minutes', 'D. 360 minutes'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-21',
        phase: '2023-2024',
        text: 'Which of the following statements is false about the ACID feature of database transactions?',
        options: [
            'A. A refers to atomicity. Operations in a transaction are either all successful or all failed.',
            'B. C refers to consistency. The system status can only be the status before the transaction or after the transaction is successful.',
            'C. I refers to availability.',
            'D. D refers to durability.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-22',
        phase: '2023-2024',
        text: 'Which of the following directories or files determines the boot mode of openEuler?',
        options: ['A. /boot/efi/EFI/openEuler/', 'B. /etc/grub2', 'C. /sys/firmware/efi', 'D. /etc/default/grub'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-23',
        phase: '2023-2024',
        text: 'Which of the following statements is true about the fully-encrypted equality query capability of the openGauss database?',
        options: [
            'A. Data is encrypted during storage and decrypted during computing.',
            'B. Data is encrypted during storage and computing and decrypted when it is returned to the client.',
            'C. Data is encrypted during transmission, storage, and computing and cannot be decrypted.',
            'D. Data is encrypted during storage and decrypted using the dynamic key provided by the application during computing.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    }
];
