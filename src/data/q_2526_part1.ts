import { Question } from './types';

export const y2526QuestionsPart1: Question[] = [
    {
        id: '2526-1',
        phase: '2025-2026 Pre Test',
        text: 'Which of the following statements is false about the commands?',
        options: [
            'A. "mv" moves files or directories.',
            'B. "rm" deletes files or directories.',
            'C. "cp" copies files or directories.',
            'D. "touch" creates files or directories.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2526-2',
        phase: '2025-2026 Pre Test',
        text: 'Compared with other open-source databases, openGauss has many new technical features. Which of the following statements is false?',
        options: [
            'A. It provides AI-based parameter tuning and index recommendations and automatically recommends AI parameters.',
            'B. It adopts the Mulan Permissive Software License, allowing code to be freely modified, used, and referenced.',
            'C. It provides the Ustore for frequent update scenarios.',
            'D. It provides the Store engine for frequent query scenarios.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2526-3',
        phase: '2025-2026 Pre Test',
        text: 'Which of the following statements is true about the openGauss database architecture?',
        options: [
            'A. openGauss uses the multi-process and multi-thread architecture.',
            'B. openGauss uses the multi-process architecture. Each database connection corresponds to an independent process.',
            'C. openGauss uses the single-process and multi-thread architecture. All database operations are performed in the same process as threads.',
            'D. openGauss uses the client/server architecture. The client and server run in the same process.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2526-4',
        phase: '2025-2026 Pre Test',
        text: 'When you build open source software for the Kunpeng platform using Maven repositories, which of the following statements is false?',
        options: [
            'A. When the required components are not present in the local repository, Maven downloads them from remote repositories.',
            'B. Maven repositories can be configured with proxy settings to accelerate dependency downloads from remote repositories.',
            'C. Maven repositories provide all external dependency libraries, including versions specifically optimized for the Kunpeng platform.',
            'D. The local Maven repository is first queried.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2526-5',
        phase: '2025-2026 Pre Test',
        text: 'In openEuler, which "rpm" command is used to install application software?',
        options: ['A. rpm -qi xxx.rpm', 'B. rpm -ql xxx.rpm', 'C. rpm -ivh xxx.rpm', 'D. rpm -e xxx.rpm'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2526-6',
        phase: '2025-2026 Pre Test',
        text: 'If a database administrator wants to interrupt a query that has been running for a long time, which of the following views can be used to obtain the process ID of the session to help the database administrator perform this operation?',
        options: ['A. PG_STAT_ACTIVITY', 'B. PG_STATS', 'C. PG_USER', 'D. PG_STAT_USER'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2526-7',
        phase: '2025-2026 Pre Test',
        text: 'In Linux, which of the following statements is true about the function of the "chown" command?',
        options: [
            'A. Modifies the link attributes of a file or directory, specifying if it is a hard or soft link.',
            'B. Modifies the read, write, and execute permissions on a file or directory.',
            'C. Modifies the default home directory of a user.',
            'D. Modifies the user and user group to which a file or directory belongs.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2526-8',
        phase: '2025-2026 Pre Test',
        text: 'On a WLAN with flooding attack detection enabled, which of the following items does an AP use to detect flooding attacks?',
        options: [
            'A. Number of associated STAs on the AP',
            'B. Traffic volume from STAs',
            'C. STA association and disassociation frequencies',
            'D. Number of concurrent STAs on the AP'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2526-9',
        phase: '2025-2026 Pre Test',
        text: 'During an AC upgrade on an enterprise\'s WLAN, which of the following is the most secure method to upload an upgrade file to an AC?',
        options: [
            'A. Using the AC as an FTP server',
            'B. Using the AC as an FTP client',
            'C. Using the AC as an SFTP client',
            'D. Using the AC as an SFTP server'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2526-10',
        phase: '2025-2026 Pre Test',
        text: 'In the distributed Layer 3 VXLAN gateway deployment solution, which of the following is a VXLAN gateway?',
        options: ['A. Leaf node', 'B. P device', 'C. PE device', 'D. Spine node'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2526-11',
        phase: '2025-2026 Pre Test',
        text: 'Which of the following statements is false about VXLAN packet encapsulation?',
        options: [
            'A. The outer IP header supports only IPv4.',
            'B. The outer IP header is the remote VTEP\'s IP address of a VXLAN tunnel.',
            'C. The VXLAN network identifier is 24 bits and is used to identify a VXLAN segment.',
            'D. The destination UDP port number is 4789.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2526-12',
        phase: '2025-2026 Pre Test',
        text: 'On a data center network, which of the following is used to provide L4–L7 value-added services such as firewalls and load balancers?',
        options: ['A. Service leaf', 'B. Border leaf', 'C. Security leaf', 'D. Server leaf'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2526-13',
        phase: '2025-2026 Pre Test',
        text: 'Which of the following is the outer IP address when a packet is encapsulated to be forwarded in a VXLAN tunnel?',
        options: ['A. Router ID', 'B. LSR ID', 'C. VTEP IP', 'D. NE IP'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2526-14',
        phase: '2025-2026 Pre Test',
        text: 'AAA is a network security management mechanism. Which of the following functions is not provided by AAA?',
        options: ['A. Authentication', 'B. Access', 'C. Authorization', 'D. Accounting'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2526-15',
        phase: '2025-2026 Pre Test',
        text: 'In OSPF Link State Advertisements (LSAs), which of the following LSAs is generated by an ASBR to describe routes to a destination outside an AS?',
        options: ['A. Network-Summary-LSA', 'B. ASBR-Summary-LSA', 'C. AS-external-LSA', 'D. Network-LSA'],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: '2526-16',
        phase: '2025-2026 Pre Test',
        text: 'If an AP fails to go online due to a version mismatch, which of the following commands can be used to locate the root cause?',
        options: [
            'A. display ap all',
            'B. display current-configuration',
            'C. display ac all',
            'D. display ap global configuration'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2526-17',
        phase: '2025-2026 Pre Test',
        text: 'If IPv6 is deployed on a company\'s new network, which of the following methods can be used by the company\'s network administrator to enhance routing protocol security on this IPv6 network?',
        options: [
            'A. OSPFv3 with HMAC-SHA256',
            'B. RIPng with HMAC-SHA256',
            'C. BGP over IPsec',
            'D. OSPFv3 with MD5'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: '2526-18',
        phase: '2025-2026 Pre Test',
        text: 'Which of the following statements about Ascend chips is false?',
        options: [
            'A. Ascend chips support accelerated inference of deep learning models.',
            'B. Ascend chips support multiple AI frameworks, such as TensorFlow and MindSpore.',
            'C. Ascend chips are processors designed for AI computing.',
            'D. Ascend chips can be used only on Huawei software platforms.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: '2526-19',
        phase: '2025-2026 Pre Test',
        text: 'Which of the following is not a data aggregation period of Cloud Eye?',
        options: ['A. 4 hours', 'B. 72 hours', 'C. 24 hours', 'D. 1 hour'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: '2526-20',
        phase: '2025-2026 Pre Test',
        text: 'Which of the following statements is false about Elastic IP (EIP)?',
        options: [
            'A. EIPs and cloud resources can be in different regions.',
            'B. EIP remains unchanged when you start or stop an Elastic Cloud Server (ECS).',
            'C. EIPs that are bound to cloud resources cannot be released unless they are unbound.',
            'D. An EIP can be bound to only one cloud resource.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    }
];
