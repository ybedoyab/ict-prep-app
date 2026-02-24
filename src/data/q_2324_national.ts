import { Question } from './types';

export const y2324NationalQuestions: Question[] = [
    {
        id: '2324-nat-1',
        phase: '2023-2024 National',
        text: 'Which of the following statements about index design is false?',
        options: [
            'A. The number of indexes of a table involving frequent DML operations is recommended to be less than or equal to 5.',
            'B. Indexes are built for columns with a large number of identical values.',
            'C. Indexes are built for columns that are often used for query selection.',
            'D. Indexes are built for attributes that are often used as table joins.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-2',
        phase: '2023-2024 National',
        text: 'Which of the following is the fully-encrypted equality query capability provided by openGauss?',
        options: [
            'A. Data is encrypted during storage and decrypted during computing.',
            'B. Data is encrypted during storage and computing and decrypted when it is returned to the client.',
            'C. Data is encrypted during transmission, storage, and computing and cannot be decrypted.',
            'D. Data is encrypted during storage and decrypted using the dynamic key provided by the application during computing.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-nat-3',
        phase: '2023-2024 National',
        text: 'Which of the following commands is used to log out the "iqn.2023-10.com.test:raid" node during iSCSI client configuration?',
        options: [
            'A. iscsiadm -m node -T iqn.2023-10.com.test:raid -p 192.168.1.1:3260 -l',
            'B. iscsiadm -m node -T iqn.2023-10.com.test:raid -p 192.168.1.1:3260 -u',
            'C. iscsiadm -m node -o delete -T iqn.2023-10.com.test:raid -p 192.168.1.1:3260',
            'D. iscsiadm -m node -o update -T iqn.2023-10.com.test:raid -p 192.168.1.1:3260'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-4',
        phase: '2023-2024 National',
        text: 'Which of the following join types are supported by the openGauss join operator?',
        options: [
            'A. Hash join',
            'B. Merge join',
            'C. Nested loops',
            'D. All of the above'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-nat-5',
        phase: '2023-2024 National',
        text: 'Which of the following statements about Nginx is false?',
        options: [
            'A. Nginx features low memory usage, high concurrent connections, and fast response.',
            'B. Nginx implements functions such as HTTP server, virtual host, and reverse proxy.',
            'C. The configuration of Nginx is simple.',
            'D. Nginx is good at handling both dynamic and static requests.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-nat-6',
        phase: '2023-2024 National',
        text: 'Which of the following statements about zombie processes is true?',
        options: [
            'A. A zombie process does not exist in the process table.',
            'B. You can kill a zombie process by running "kill -9 <ID of zombie process>".',
            'C. You can kill a zombie process by running "kill -15 <ID of zombie process>".',
            'D. You can kill a zombie process by running "kill -9 <ID of parent process of zombie process>".'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-nat-7',
        phase: '2023-2024 National',
        text: 'Which of the following scenarios is most suitable for distributed striped volumes of GlusterFS?',
        options: [
            'A. Scenario that involves a great number of large files and requires high read and write performance.',
            'B. Scenario that involves a great number of large files and requires high read performance and reliability.',
            'C. Scenario that requires flexible data access control.',
            'D. Scenario that requires fast data recovery.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-nat-8',
        phase: '2023-2024 National',
        text: 'Which of the following Bash commands can be used to obtain the size of a file in bytes?',
        options: [
            'A. wc -l filename',
            'B. stat %s filename',
            'C. ls -lh filename | awk \'{print $5}\'',
            'D. du -h filename | awk \'{print $1}\''
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-nat-9',
        phase: '2023-2024 National',
        text: 'What is the execution effect of the "revoke create on schema public from public;" statement?',
        options: [
            'A. The create permission in the public schema is revoked from all users.',
            'B. The create permission in the public schema is revoked from public users.',
            'C. An error is reported when this statement is executed.',
            'D. This statement can be executed but has no effect.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-10',
        phase: '2023-2024 National',
        text: 'Which of the following tools is used to help users understand the database workload of openGauss?',
        options: [
            'A. gs_checkos',
            'B. gs_check',
            'C. gs_checkperf',
            'D. gs_collector'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-nat-11',
        phase: '2023-2024 National',
        text: 'Which of the following statements about the ACID feature of database transactions is false?',
        options: [
            'A. A refers to atomicity. Operations in a transaction are either all successful or all failed.',
            'B. C refers to consistency. The system status can only be the status before or after the transaction is successful. No inconsistent intermediate status can exist.',
            'C. I refers to availability. The database system must provide the highest availability for database execution to ensure that most transactions can be successfully executed.',
            'D. D refers to durability. The status of a successful transaction can be maintained even if the machine is powered off.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-nat-12',
        phase: '2023-2024 National',
        text: 'Which of the following drivers is used by Data Studio to communicate with openGauss?',
        options: [
            'A. JDBC',
            'B. ODBC',
            'C. Libpq',
            'D. Psycopg'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-nat-13',
        phase: '2023-2024 National',
        text: 'Which of the following methods can be used to create a task in SaltStack?',
        options: [
            'A. Create a task running a Python script.',
            'B. Create a task from a YAML file.',
            'C. Create a task from a ZML file.',
            'D. Create a task running a shell script.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-14',
        phase: '2023-2024 National',
        text: 'Which of the following is the default value of search_path in openGauss?',
        options: [
            'A. "$postgres",public',
            'B. "$user",public',
            'C. "template0",public',
            'D. "schema",public'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-15',
        phase: '2023-2024 National',
        text: 'Which of the following statements about the FOR_LOOP statement in openGauss stored procedures is true?',
        options: [
            'A. FOR_LOOP supports integer variable loops.',
            'B. FOR_LOOP supports query statements.',
            'C. The target variable in FOR_LOOP does not need to be declared or defined in advance.',
            'D. It must be used together with EXIT. Otherwise, an infinite loop may occur.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-nat-16',
        phase: '2023-2024 National',
        text: 'What is the purpose of plan hints in openGauss?',
        options: [
            'A. To optimize query plans.',
            'B. To control the transaction isolation level.',
            'C. To control the size of a database connection pool.',
            'D. To enable SQL statement tracing and analysis.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-nat-17',
        phase: '2023-2024 National',
        text: 'When is openEuler 22.03 LTS planned for end-of-life?',
        options: [
            'A. 44986',
            'B. 2024/03',
            'C. 45717',
            'D. 46082'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-18',
        phase: '2023-2024 National',
        text: 'Which of the following commands can be used to save all lines in a text file to another file in reverse order?',
        options: [
            'A. cat input.txt | sort -r > output.txt',
            'B. cat input.txt | tac > output.txt',
            'C. cat input.txt | rev output.txt',
            'D. cat input.txt | awk \'BEGIN{OFS=ORS=""}{for (i=NF;i>0;i--) print $i};\' > output.txt'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-19',
        phase: '2023-2024 National',
        text: 'Which of the following statements about the "free -m" command is true?',
        options: [
            'A. In the output, the unit is MB.',
            'B. In the output, the unit is KB.',
            'C. This command is used to check the free drive space.',
            'D. This command is used to check the free CPUs.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-nat-20',
        phase: '2023-2024 National',
        text: 'An Nginx server uses port 80 to provide services for external systems. The test on the server is passed, but users cannot access the server through port 80. Which of the following is the possible cause?',
        options: [
            'A. Port 80 is not enabled on the firewall of the Nginx server.',
            'B. Users should not use port 80 for access.',
            'C. Nginx does not support direct access from a browser.',
            'D. The "curl" command is used for the test on the server, but the command is not installed on the user side.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-nat-21',
        phase: '2023-2024 National',
        text: 'Which of the following commands can be used to make "myfile" modifiable and executable for its owner, readable and executable for its owner group, and not accessible for other users?',
        options: [
            'A. chown 706 myfile',
            'B. chmod 750 myfile',
            'C. chown 705 myfile',
            'D. chmod 777 myfile'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-22',
        phase: '2023-2024 National',
        text: 'If you mistakenly delete table data by using the delete command and insert new data, which of the following restoration methods can be used?',
        options: [
            'A. Flashback vacuum',
            'B. Flashback drop',
            'C. Flashback truncate',
            'D. Flashback table'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-nat-23',
        phase: '2023-2024 National',
        text: 'Which of the following statements about the openGauss HA enterprise deployment, RPO, and RTO is true?',
        options: [
            'A. openGauss does not support HA synchronization. As a result, the RPO value is high.',
            'B. openGauss supports HA synchronization to ensure zero RPO and uses the ultimate RTO technology to ensure that the RTO is less than 10 seconds.',
            'C. openGauss supports an RPO of less than 10 seconds and zero RTO only in the HA enterprise deployment.',
            'D. openGauss supports an RTO of less than 10 seconds but cannot ensure zero RPO in the HA enterprise deployment.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-24',
        phase: '2023-2024 National',
        text: 'Which of the following is NOT a function of the connection pool?',
        options: [
            'A. To connect to a database.',
            'B. To optimize the database connection.',
            'C. To share connections with different attributes.',
            'D. To optimize clients.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-nat-25',
        phase: '2023-2024 National',
        text: 'Loop unrolling is an optimization technique that improves the performance of a program by reducing the number of loops. Which of the following options enables loop unrolling?',
        options: [
            'A. -O',
            'B. -O1',
            'C. -O2',
            'D. -O3'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-nat-26',
        phase: '2023-2024 National',
        text: 'Which of the following SQL statements grant all privileges to a user?',
        options: [
            'A. GRANT ALL PRIVILEGES ON *.* TO \'username\'@\'localhost\';',
            'B. REVOKE ALL PRIVILEGES ON *.* FROM \'username\'@\'localhost\';',
            'C. GRANT SELECT, INSERT, UPDATE ON dbname.* TO \'username\'@\'localhost\';',
            'D. REVOKE SELECT, INSERT, UPDATE ON dbname.* FROM \'username\'@\'localhost\';'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-nat-27',
        phase: '2023-2024 National',
        text: 'Which of the following Ansible modules can copy files from a managed node to a control node?',
        options: [
            'A. fetch',
            'B. service',
            'C. copy',
            'D. cron'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-nat-28',
        phase: '2023-2024 National',
        text: 'Which of the following is the default configuration file of Keepalived?',
        options: [
            'A. /usr/keepalived/keepalived.conf',
            'B. /var/keepalived/keepalived.conf',
            'C. /usr/etc/keepalived/keepalived.conf',
            'D. /etc/keepalived/keepalived.conf'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-nat-29',
        phase: '2023-2024 National',
        text: 'In Vim, which of the following commands is used to search for occurrences of "2023" backwards?',
        options: [
            'A. /2023',
            'B. ?2023',
            'C. #2023',
            'D. %2023'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-30',
        phase: '2023-2024 National',
        text: 'Which of the following statements about constraints are true?',
        options: [
            'A. There are column-level and table-level constraints, but openGauss supports only column-level constraints.',
            'B. Constraints can be specified only when a table is created using the CREATE TABLE statement.',
            'C. A PRIMARY KEY constraint is a combination of a NOT NULL constraint and a UNIQUE constraint.',
            'D. None of the above'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-nat-31',
        phase: '2023-2024 National',
        text: 'Which of the following tools is commonly used by openGauss to collect logs?',
        options: [
            'A. gs_check',
            'B. gs_checkos',
            'C. gs_checkperf',
            'D. gs_collector'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2324-nat-32',
        phase: '2023-2024 National',
        text: 'Which of the following is the main difference between the CISC and RISC instruction sets?',
        options: [
            'A. RISC is more complex than CISC.',
            'B. CISC is more complex than RISC.',
            'C. CISC and RISC have the same complexity, but CISC processors are faster.',
            'D. CISC and RISC have the same complexity, but RISC processors are faster.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-33',
        phase: '2023-2024 National',
        text: 'Which of the following table clearance operations support transaction rollback?',
        options: [
            'A. TRUNCATE',
            'B. DROP',
            'C. DELETE',
            'D. VACUUM'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-nat-34',
        phase: '2023-2024 National',
        text: 'How many standby nodes does openGauss support?',
        options: [
            'A. 3',
            'B. 8',
            'C. 10',
            'D. No limit'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-35',
        phase: '2023-2024 National',
        text: 'During the installation of openEuler using the Anaconda GUI, which directory of the boot image are the Anaconda logs stored in?',
        options: [
            'A. /etc',
            'B. /var',
            'C. /tmp',
            'D. /usr'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-36',
        phase: '2023-2024 National',
        text: 'To replace MySQL with GaussDB in an LNMP (Linux-Nginx-MySQL-PHP) software stack, which of the following operations needs to be performed?',
        options: [
            'A. Uninstall MySQL and install GaussDB.',
            'B. Migrate data to GaussDB and update PHP configurations to support GaussDB.',
            'C. Update Nginx configurations to support GaussDB.',
            'D. Change the database connection string to point to GaussDB.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-37',
        phase: '2023-2024 National',
        text: 'Which of the following commands is used to rebuild openGauss standby nodes?',
        options: [
            'A. gsql',
            'B. gs_expansion',
            'C. gs_guc',
            'D. gs_encrypt'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-38',
        phase: '2023-2024 National',
        text: 'Which of the following locks need to be held by openGauss during VACUUM?',
        options: [
            'A. EXCLUSIVE',
            'B. ShareUpdateExclusiveLock',
            'C. SHARE',
            'D. ROW EXCLUSIVE'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2324-nat-39',
        phase: '2023-2024 National',
        text: 'Which of the following is the main function of DNS cache?',
        options: [
            'A. Accelerates domain name resolution.',
            'B. Protects domain name from DDoS attacks.',
            'C. Prevents DNS spoofing attacks.',
            'D. Provides the domain name registration service.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2324-nat-40',
        phase: '2023-2024 National',
        text: 'Which of the following statements about gs_basebackup is false?',
        options: [
            'A. gs_basebackup uses the replication protocol to physically copy binary database files.',
            'B. gs_basebackup can initiate a replication link from a client.',
            'C. gs_basebackup supports incremental backup.',
            'D. If the pg_xlog directory is a soft link, you need to move it to the target path after the backup.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2324-nat-41',
        phase: '2023-2024 National',
        text: 'How do we clear the connection status if the connection pool mechanism is used during app development?',
        options: [
            'A. Restart the database.',
            'B. Restart the application.',
            'C. If GUC parameters are set in the connection, use "SET SESSION AUTHORIZATION DEFAULT;RESET ALL;" to clear the connection status before you return the connection to the connection pool.',
            'D. If a temporary table is used, delete the temporary table before you return the connection to the connection pool.'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-42',
        phase: '2023-2024 National',
        text: 'Which of the following statements about the security mechanism of Linux are true?',
        options: [
            'A. The default permission on files created in Linux is "644".',
            'B. The default permission on directories created in Linux is "755".',
            'C. The default permission mask in Linux is "022".',
            'D. You can use the "umask" command to change the default permissions on files and directories in Linux.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-43',
        phase: '2023-2024 National',
        text: 'Which of the following statements about user management commands are true?',
        options: [
            'A. "useradd -b /home/wangwu zhaoliu" adds a user and sets /home/wangwu as the user\'s home directory.',
            'B. "userdel -rf lisi" deletes the lisi user as well as the user\'s group and home directory.',
            'C. \'groupmod -c "Common user" lisi\' adds a remark for the lisi user.',
            'D. "cat /etc/group" displays the created groups and corresponding group IDs.'
        ],
        correctAnswers: ['B', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-44',
        phase: '2023-2024 National',
        text: 'Which of the following statements about foreground and background processes are true?',
        options: [
            'A. Foreground processes have a lower priority than background processes.',
            'B. Background processes have a lower priority than foreground processes.',
            'C. A daemon process in Linux is a special background process that is independent of the terminal and periodically executes tasks or waits to be resumed.',
            'D. A foreground process is a process with a control terminal to be used by a user.'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-45',
        phase: '2023-2024 National',
        text: '"ipvsadm -a -t 192.168.1.100:80 -r 192.168.1.101:80 -m" is a Linux virtual server administration command. What is the packet-forwarding method of this server, and what is the IP address of this server?',
        options: [
            'A. Network address translation',
            'B. Direct routing',
            'C. 192.168.1.100',
            'D. 192.168.1.101'
        ],
        correctAnswers: ['A', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-46',
        phase: '2023-2024 National',
        text: 'Which of the following steps need to be performed during openGauss installation?',
        options: [
            'A. Disable transparent huge pages.',
            'B. Disable the firewall.',
            'C. Disable the swap memory.',
            'D. Unify the time zone and time.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-47',
        phase: '2023-2024 National',
        text: 'In the openGauss fully-encrypted database, which of the following methods can be used to create an encrypted table?',
        options: [
            'A. Use the CREATE TABLE statement to specify the encryption algorithm and key.',
            'B. Use the ALTER TABLE statement to specify the encryption algorithm and key.',
            'C. Use the CREATE TABLESPACE statement to specify the encryption algorithm and key.',
            'D. Run the pg_dump command to back up the existing encrypted table and specify the encryption algorithm and key.'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: '2324-nat-48',
        phase: '2023-2024 National',
        text: 'Which of the following composite query types are supported by openGauss?',
        options: [
            'A. UNION',
            'B. INTERSECT',
            'C. MINUS',
            'D. EXCEPT'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-49',
        phase: '2023-2024 National',
        text: 'Which of the following openGauss database processes are not responsible for flushing dirty page data from the memory to disks?',
        options: [
            'A. pagewriter',
            'B. bgwriter',
            'C. walwriter',
            'D. checkpoint'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-50',
        phase: '2023-2024 National',
        text: 'Which of the following are the advantages of Apache over Nginx?',
        options: [
            'A. Apache is suitable for dynamic page requests.',
            'B. The rewrite function of Apache is more powerful.',
            'C. The functions of Apache are highly integrated.',
            'D. Apache can adapt to higher concurrency.'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-nat-51',
        phase: '2023-2024 National',
        text: 'Which of the following statements about shell script troubleshooting are true?',
        options: [
            'A. Errors are usually caused by input errors, syntax errors, or incorrect script logic.',
            'B. When writing scripts, using a text editor with Bash syntax highlighting helps make errors more obvious.',
            'C. The most direct way to find and correct errors in a script is to debug.',
            'D. A way to avoid introducing errors into a script is to follow a good style during script creation.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-52',
        phase: '2023-2024 National',
        text: 'Which of the following are high-risk database operations?',
        options: [
            'A. Rebuild read-only instances.',
            'B. Delete instance backups.',
            'C. Parses database execution logs.',
            'D. Change database ports.'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-53',
        phase: '2023-2024 National',
        text: 'Which of the following commands are used to set the NFS service to automatically start upon system startup?',
        options: [
            'A. systemctl start rpcbind.service',
            'B. systemctl start nfs.service',
            'C. systemctl enable rpcbind.service',
            'D. systemctl enable nfs-server.service'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-54',
        phase: '2023-2024 National',
        text: 'Which of the following statements about Nginx are true?',
        options: [
            'A. By default, Nginx uses polling for load balancing.',
            'B. If the performance of backend servers varies, weighted polling can be used for load balancing.',
            'C. Nginx can separate dynamic and static resources. Static resources are maintained by the server, while dynamic resources are processed by the Nginx backend.',
            'D. The reverse proxy of Nginx is used to forward client requests to backend servers.'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-55',
        phase: '2023-2024 National',
        text: 'Before installing the openEuler operating system, you need to change BIOS settings. Which of the following statements about the BIOS settings are true?',
        options: [
            'A. BIOS settings allow the machine to identify storage devices, such as HDDs and CD-ROM drives, and correctly read installation files.',
            'B. BIOS settings can be used to detect and adjust hardware parameters to ensure normal running of hardware devices.',
            'C. BIOS settings allow you to set the boot sequence to ensure that the operating system can boot from the correct device during installation.',
            'D. BIOS settings let you change the startup password of the computer to protect the system from unauthorized access.'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-nat-56',
        phase: '2023-2024 National',
        text: 'The openGauss has two built-in tablespaces: pg_default and pg_global. Which of the following statements are true?',
        options: [
            'A. The pg_global tablespace stores system catalogs, user tables, user table indexes, temporary tables, temporary table indexes, and internal temporary tables. The directory is "$GAUSS_DATA_HOME/base/".',
            'B. The pg_global tablespace stores system catalogs in "$GAUSS_DATA_HOME/global/".',
            'C. The pg_default tablespace stores system catalogs, user tables, user table indexes, temporary tables, temporary table indexes, and internal temporary tables. The directory is "$GAUSS_DATA_HOME/base/".',
            'D. The pg_default tablespace stores system catalogs in "$GAUSS_DATA_HOME/global/".'
        ],
        correctAnswers: ['B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-nat-57',
        phase: '2023-2024 National',
        text: 'What state can PITR restore data to after backup and archive?',
        options: [
            'A. A restoration point created by pg_create_restore_point()',
            'B. A specified timestamp',
            'C. A transaction ID',
            'D. A specified LSN of the logs'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-58',
        phase: '2023-2024 National',
        text: 'Which of the following statements about the openGauss database auxiliary thread are true?',
        options: [
            'A. WAL writer is responsible for writing permanent records of committed transactions to WAL files.',
            'B. Page writer is used to copy the dirty page data to the doublewrite area and flush the data to disks.',
            'C. Checkpointer is used to periodically check the points and flush dirty pages to disks to ensure database consistency.',
            'D. AutoVacuum is used to collect statistics on objects, SQL statements, sessions, and locks and store the statistics in the pgstat.stat file.'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-nat-59',
        phase: '2023-2024 National',
        text: 'By default, the database system administrator has the highest database permissions. To mitigate risks associated with the centralized permissions held by the system administrator, you can configure the separation-of-duties function during actual service management. Which two members can be granted some of the same permissions system administrators have?',
        options: [
            'A. Audit administrator',
            'B. System administrator',
            'C. Security administrator',
            'D. Initial user'
        ],
        correctAnswers: ['A', 'C'],
        type: 'multi'
    },
    {
        id: '2324-nat-60',
        phase: '2023-2024 National',
        text: 'To grant the user "jack" permission to create tables in myschema, which of the following statements must be executed?',
        options: [
            'A. GRANT USAGE schema myschema TO jack',
            'B. GRANT ALTER ON schema myschema TO jack',
            'C. GRANT DROP ON schema myschema TO jack',
            'D. GRANT CREATE ON schema myschema TO jack'
        ],
        correctAnswers: ['A', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-61',
        phase: '2023-2024 National',
        text: 'What are the advantages of openGauss tablespaces?',
        options: [
            'A. Different disks can be selected based on data characteristics.',
            'B. The upper limit (maxsize) of tablespace capacity can be set.',
            'C. A tablespace corresponds to a file system directory; read/write permissions are required on an empty directory.',
            'D. Tablespaces allow administrators to distribute data based on database object schema, improving system performance.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-62',
        phase: '2023-2024 National',
        text: 'In HAProxy, which of the following options can use an access control list (ACL) to restrict IP addresses that can access the frontend?',
        options: [
            'A. The "allow" command',
            'B. The "allowlist" command',
            'C. The "acl" command',
            'D. The "restrict" command'
        ],
        correctAnswers: ['A', 'C'],
        type: 'multi'
    },
    {
        id: '2324-nat-63',
        phase: '2023-2024 National',
        text: 'If you discover that a database instance has stopped responding, what steps should you follow?',
        options: [
            'A. Restart the database server.',
            'B. Check server resources such as memory and disk space.',
            'C. Restore the data backup.',
            'D. Review error logs for useful information.'
        ],
        correctAnswers: ['B', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-64',
        phase: '2023-2024 National',
        text: 'Which of the following statements about system information monitoring and display commands are true?',
        options: [
            'A. You can execute the "lscpu" command to query CPU architecture.',
            'B. You can execute the "uname -r" command to query the kernel version.',
            'C. System memory information returned by the "free -m" command is in MB.',
            'D. You can execute the "df -Th" command to query the type and available space of each drive.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-65',
        phase: '2023-2024 National',
        text: 'In which of the following situations can a WDR (Workload Diagnosis Report) NOT be generated?',
        options: [
            'A. A node restarts between two snapshots.',
            'B. A TRUNCATE TABLE operation is executed between two snapshots.',
            'C. A primary/standby switchover occurs between two snapshots.',
            'D. A DROP DATABASE operation is executed between two snapshots.'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-66',
        phase: '2023-2024 National',
        text: 'Which of the following are advantages of the ext4 file system?',
        options: [
            'A. High performance and reliability.',
            'B. Data security protection.',
            'C. Compatibility with all Linux distributions.',
            'D. Defragmentation that improves file system availability.'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-67',
        phase: '2023-2024 National',
        text: 'Which of the following statements about software and service management are true?',
        options: [
            'A. The RPM database file is stored in the "/var/lib/rpm" directory. You can execute the "rpm -rebuilddb" command to rebuild the database.',
            'B. The "dnf autoremove" command can be used to uninstall software packages that are not needed on the system.',
            'C. After executing the "systemctl enable firewalld" command, a symbolic link pointing to the "firewalld.service" file is created in "/etc/systemd/system".',
            'D. You can execute the "rpm -qc glibc" command to see the configuration files contained in the "glibc" software package.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-68',
        phase: '2023-2024 National',
        text: 'Which of the following statements about common process management commands in openEuler is FALSE?',
        options: [
            'A. "jobs" lists processes running in the foreground.',
            'B. "fg" resumes a background process.',
            'C. "bg" moves a background process to the foreground.',
            'D. "Ctrl+C" interrupts a running process.'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: '2324-nat-69',
        phase: '2023-2024 National',
        text: 'In the openGauss memory structure, which of the following are local memory buffers?',
        options: [
            'A. work_mem',
            'B. OCK-RDMA',
            'C. maintenance_work_mem',
            'D. Storage'
        ],
        correctAnswers: ['A', 'C'],
        type: 'multi'
    },
    {
        id: '2324-nat-70',
        phase: '2023-2024 National',
        text: 'Which of the following files does the shell load when you log in to openEuler using the CLI or SSH?',
        options: [
            'A. /etc/profile',
            'B. ~/.bash_profile',
            'C. ~/.profile',
            'D. ~/.bashrc'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: '2324-nat-71',
        phase: '2023-2024 National',
        text: 'In openEuler, the "niceness" value of a process ranges from -20 to +20.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2324-nat-72',
        phase: '2023-2024 National',
        text: 'In addition to query performance, indexes can be used to improve database insertion and deletion performance.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2324-nat-73',
        phase: '2023-2024 National',
        text: 'After installing openEuler, the default root partition is "openEuler-root".',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2324-nat-74',
        phase: '2023-2024 National',
        text: 'iptables is a user-space command-line tool. You can use iptables to set security configurations for the netfilter data packet processing module in the Linux kernel.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2324-nat-75',
        phase: '2023-2024 National',
        text: 'Currently, the SERIAL column can be specified when creating a table and can be inserted into an existing table.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2324-nat-76',
        phase: '2023-2024 National',
        text: 'The rwx mechanism in Linux controls file access permissions.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2324-nat-77',
        phase: '2023-2024 National',
        text: 'gs_dump is used to export database information. During export, gs_dump suspends normal database access so that complete and consistent data can be exported.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2324-nat-78',
        phase: '2023-2024 National',
        text: 'Logical backup can back up data of the entire cluster and restore data in a homogeneous database.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2324-nat-79',
        phase: '2023-2024 National',
        text: 'SELinux is a mandatory access control security mechanism based on the Linux LSM framework.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2324-nat-80',
        phase: '2023-2024 National',
        text: 'When using the Vim editor, you can execute the :x command in normal mode to save changes and exit.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2324-nat-81',
        phase: '2023-2024 National',
        text: '"smb.conf" is the core configuration file of Samba.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2324-nat-82',
        phase: '2023-2024 National',
        text: 'A tablespace is used to manage data objects and corresponds to a directory on a disk.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2324-nat-83',
        phase: '2023-2024 National',
        text: 'In the instr(string1, string2, int1, int2) function, int2 indicates the position where a string ends to be matched.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2324-nat-84',
        phase: '2023-2024 National',
        text: 'If you specify the PARTITION parameter when running the CREATE TABLE statement, the table will be partitioned.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2324-nat-85',
        phase: '2023-2024 National',
        text: '"$#" in a shell script obtains the number of arguments supplied to the script.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2324-nat-86',
        phase: '2023-2024 National',
        text: 'When you access the Samba directory through "\\\\Samba_IP\\share", login authentication is not required, but you can only create folders or files.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2324-nat-87',
        phase: '2023-2024 National',
        text: 'Uninstalling the database is a major operation. Therefore, you need to run the uninstallation script as the user root.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2324-nat-88',
        phase: '2023-2024 National',
        text: 'In openEuler, the memory allocated by "malloc", a dynamic memory allocation function, is physically continuous.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: '2324-nat-89',
        phase: '2023-2024 National',
        text: 'A system catalog stores openGauss metadata and is the core part of a database. Users cannot manually edit the system catalog data.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: '2324-nat-90',
        phase: '2023-2024 National',
        text: 'The result of SELECT CIRCLE \'((0, 0), 1)\' << CIRCLE \'((5,0), 1)\'; is TRUE.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    }
];
