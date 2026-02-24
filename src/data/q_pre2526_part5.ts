import type { Question } from './types';

export const pre2526QuestionsPart5: Question[] = [
    {
        id: 'pre2526-81',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following commands can be used to redirect the result of "find" to "result"?',
        options: [
            'A. find / -name "test" 2< result',
            'B. find / -name "test" &> result',
            'C. find / -name "test" 2> result',
            'D. find / -name "test" > result'
        ],
        correctAnswers: ['B', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-82',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements are true about the advantages of tablespaces?',
        options: [
            'A. Tablespaces enable administrators to arrange storage locations based on object usage for enhanced performance.',
            'B. A tablespace corresponds to a file system directory, which is an empty directory on which users must have read and write permissions.',
            'C. If the partition or volume where the database is located is full, you can create tablespaces in other partitions.',
            'D. A table in a database can be distributed to multiple tablespaces.'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: 'pre2526-83',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following system catalogs or views can be used to query permission information in a database?',
        options: [
            'A. gs_sql_count',
            'B. information_schema.table_privileges',
            'C. pg_authid',
            'D. pg_user'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-84',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following openGauss tools can back up a database?',
        options: [
            'A. gs_dumpall',
            'B. gs_probackup',
            'C. gs_restore',
            'D. gs_dump'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-85',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following are correct wal_level parameter values in an openGauss database?',
        options: [
            'A. fsync',
            'B. minimal',
            'C. logical',
            'D. archive'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-86',
        phase: '2025-2026 Preliminary Exam',
        text: 'Which of the following statements are true about data manipulation language (DML) in SQL?',
        options: [
            'A. "DELETE" is a DML statement.',
            'B. "CREATE" is a DML statement.',
            'C. "ALTER" is a DML statement.',
            'D. "INSERT" is a DML statement.'
        ],
        correctAnswers: ['A', 'D'],
        type: 'multi'
    },
    {
        id: 'pre2526-87',
        phase: '2025-2026 Preliminary Exam',
        text: 'The "touch" command can create an empty file but cannot change the file timestamp.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        type: 'boolean'
    },
    {
        id: 'pre2526-88',
        phase: '2025-2026 Preliminary Exam',
        text: 'The Vi and Vim editors are identical. Vim is just another name for Vi.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        type: 'boolean'
    },
    {
        id: 'pre2526-89',
        phase: '2025-2026 Preliminary Exam',
        text: 'After the "chattr +a file.txt" command is executed, the file can be deleted, but the file content cannot be modified.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        type: 'boolean'
    },
    {
        id: 'pre2526-90',
        phase: '2025-2026 Preliminary Exam',
        text: 'When using the RPM Package Manager to uninstall software, you must first uninstall any other packages that depend on the software.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Verdadero'],
        type: 'boolean'
    },
    {
        id: 'pre2526-91',
        phase: '2025-2026 Preliminary Exam',
        text: 'In openGauss, user and role permission management is implemented over the role-based access control (RBAC) model.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Verdadero'],
        type: 'boolean'
    },
    {
        id: 'pre2526-92',
        phase: '2025-2026 Preliminary Exam',
        text: 'The partition key of a partitioned table must be the primary key of the table.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        type: 'boolean'
    },
    {
        id: 'pre2526-93',
        phase: '2025-2026 Preliminary Exam',
        text: 'When exporting a database, you can use the --role parameter to specify a role with necessary permission.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Verdadero'],
        type: 'boolean'
    },
    {
        id: 'pre2526-94',
        phase: '2025-2026 Preliminary Exam',
        text: 'The Kunpeng platform supports variable-length instructions, ranging from 16 to 64 bits in length.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        type: 'boolean'
    },
    {
        id: 'pre2526-95',
        phase: '2025-2026 Preliminary Exam',
        text: 'The Kunpeng community integrates software porting guidance, performance tuning tools, professional technical support, and open-source collaboration resources... However, note that the resources provided by the Kunpeng community are primarily software-focused and do not include hardware-related technical support.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        type: 'boolean'
    },
    {
        id: 'pre2526-96',
        phase: '2025-2026 Preliminary Exam',
        text: 'When a program written in a compiled language is ported to the Kunpeng processor platform, it usually needs to be recompiled... binary libraries (.so) must also be ported and recompiled...',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Verdadero'],
        type: 'boolean'
    },
    {
        id: 'pre2526-97',
        phase: '2025-2026 Preliminary Exam',
        text: 'To define custom software repositories, you can add one or more "repository" entries in the "/etc/dnf/dnf.conf" file, or create ".repo" files within the "/etc/systemd/" directory.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        type: 'boolean'
    },
    {
        id: 'pre2526-98',
        phase: '2025-2026 Preliminary Exam',
        text: 'On openEuler, "IPADDR" in the "ifcfg" configuration file is used to set the gateway address.',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        type: 'boolean'
    },
    {
        id: 'pre2526-99',
        phase: '2025-2026 Preliminary Exam',
        text: 'In openGauss, when the GRANT statement is used..., the authorized user can immediately grant the obtained permissions to other users, provided that "WITH REVOKE OPTION" is specified...',
        options: ['Verdadero', 'Falso'],
        correctAnswers: ['Falso'],
        type: 'boolean'
    }
];
