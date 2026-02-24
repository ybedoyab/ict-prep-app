import { Question } from './types';

export const githubFindsQuestions: Question[] = [
    {
        id: 'gh-finds-1',
        phase: 'Github finds',
        text: 'In the early stage of HUAWEI CLOUD Stack project construction, which of the following information can be obtained after the equipment room survey?',
        options: [
            'A. Customer information',
            'B. Cabinet UPS',
            'C. Network architecture design',
            'D. Customer requirements'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-2',
        phase: 'Github finds',
        text: 'Which of the following is used for upgrading HUAWEI CLOUD Stack?',
        options: [
            'A. HUAWEI CLOUD Stack Deploy',
            'B. HUAWEI CLOUD Stack Update',
            'C. FusionCare',
            'D. eSight'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-3',
        phase: 'Github finds',
        text: 'In the federated cloud of HUAWEI CLOUD Stack, which of the following scenarios requires Direct Connect for inter-cloud interconnection?',
        options: [
            'A. Multi-cloud unified management',
            'B. Hybrid cloud DR',
            'C. Cross-cloud application deployment',
            'D. Hybrid cloud DevOps'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-4',
        phase: 'Github finds',
        text: 'Which of the following is a preparation item in the HUAWEI CLOUD Stack delivery process?',
        options: [
            'A. HLD output',
            'B. LLD output',
            'C. Software installation package download',
            'D. Customer requirement survey'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'gh-finds-5',
        phase: 'Github finds',
        text: 'In HUAWEI CLOUD Stack, when an external NTP server is configured, where does the DMZ_NTP at the common component layer obtain the clock source?',
        options: [
            'A. External NTP',
            'B. FusionSphere OpenStack NTP',
            'C. OM_NTP',
            'D. Virtual NTP source'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-6',
        phase: 'Github finds',
        text: 'Which of the following is unable to be expanded using HUAWEI CLOUD Stack Deploy?',
        options: [
            'A. Network services',
            'B. Compute resources',
            'C. Elastic Cloud Server specifications',
            'D. Management nodes'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'gh-finds-7',
        phase: 'Github finds',
        text: 'When Rainbow performs Windows block-level migration, it modifies the startup configuration items of the destination VM. Which of the following operations will make the modification take effect?',
        options: [
            'A. Final data synchronization',
            'B. Creating a snapshot',
            'C. Creating a snapshot',
            'D. Stopping the source VM'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-8',
        phase: 'Github finds',
        text: 'In HUAWEI CLOUD Stack, which of the following traffic types pass through the Tunnel Bearing plane?',
        options: [
            'A. Traffic between ECSS on different hosts in the same subnet of a VPC',
            'B. Traffic between ECSS on the same host in different subnets of a VPC',
            'C. Traffic between ECSS on different hosts in different subnets of a VPC',
            'D. VPC peering traffic'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-9',
        phase: 'Github finds',
        text: 'Which of the following HUAWEI CLOUD Stack security services provide VM-level protection?',
        options: [
            'A. Security group',
            'B. Cloud Firewall (CFW)',
            'C. Network ACL',
            'D. Edge Firewall (EdgeFW)'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: 'gh-finds-10',
        phase: 'Github finds',
        text: 'In the networking of cloud federation with HUAWEI CLOUD Stack, which of the following methods can be used to connect HUAWEI CLOUD Stack to HUAWEI CLOUD?',
        options: [
            'A. IPsec VPN connection only',
            'B. Direct Connect connection only',
            'C. Combination of IPsec VPN and Direct Connect connections',
            'D. Combination of SSL VPN and Direct Connect connections'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: 'gh-finds-11',
        phase: 'Github finds',
        text: 'Which of the following statements about SDS software-defined storage versus traditional storage in terms of storage management is correct?',
        options: [
            'A. The LUN configuration of SDS is complex and difficult to modify.',
            'B. The external management interface of traditional storage is more automated and standardized',
            'C. SDS mainly refers to SAN storage products, and management is complicated',
            'D. The management unit of SDS is changed from the original traditional storage RAID group and LUN group to the application virtual machine'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'gh-finds-12',
        phase: 'Github finds',
        text: 'A certain project purchased a batch of TaiShan servers to build a Web system. Nginx is used to achieve load balancing. Which statement about load balancing is correct?',
        options: [
            'A. Data services with high concurrent business processing capabilities',
            'B. Provide HTTPS access and SSL offloaded data forwarding',
            'C. Initiate data request',
            'D. Large-capacity, high-reliability, and high-performance data storage'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-13',
        phase: 'Github finds',
        text: 'In the big data scenario of the acceleration engine, what is the encrypted data type?',
        options: [
            'A. Handshake connection',
            'B. Video streaming data',
            'C. Streaming data',
            'D. Block data'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'gh-finds-14',
        phase: 'Github finds',
        text: 'TaiShan big data solution is built based on Huawei Kunpeng processor. Which of the following statements about TaiShan\'s big data solution is incorrect?',
        options: [
            'A. High performance: Compared with mid-to-high-end chips in the industry, Huawei Kunpeng 920 has significantly improved computing service performance.',
            'B. Smooth expansion: Supports mixed deployment of big data core components X86 and TaiShan servers',
            'C. It is highly proprietary and only supports unified management of its own platform FusionInsight, which is safe and stable.',
            'D. Chip-level encryption supports national secret algorithms to accelerate joint FI construction of localized secure and trustworthy big data'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'gh-finds-15',
        phase: 'Github finds',
        text: 'Regarding the use of hyper-converged architecture to build private cloud solutions, which of the following statements is incorrect?',
        options: [
            'A. The physical devices including traditional servers, storage, and network devices will be integrated into a logical architecture to provide a simplified unified maintenance and management interface.',
            'B. Private cloud hyper-converged architecture can use X86 architecture servers or servers similar to Huawei\'s Kunpeng architecture to carry computing, storage and other node functions.',
            'C. Simplify data center management by redesigning the data center as a transmission system for software and services. This architecture means that storage devices and memory are connected to the same processor network.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'gh-finds-16',
        phase: 'Github finds',
        text: 'The heterogeneous server TaiShan supports the big data platform. E-commerce companies can use the server to collect data and simplify data analysis. The core technology of TaiShan server is the ARM chip, namely Kunpeng. Which of the following descriptions of Kunpeng is correct?',
        options: [
            'A. High performance and low consumption',
            'B. Super computing power',
            'C. Support multi-channel interconnection'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: 'gh-finds-17',
        phase: 'Github finds',
        text: 'Which of the following descriptions of software RAID is correct?',
        options: [
            'A. Software RAID does not affect CPU operating efficiency',
            'B. Software RAID does not require expensive RAID controller cards and hot-swappable racks',
            'C. Software RAID cannot provide hot-swappable hard disk function',
            'D. Software RAID means included in the operating system. The RAID function is completely implemented in software by the core disk code of the system.'
        ],
        correctAnswers: ['B', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-18',
        phase: 'Github finds',
        text: 'When upgrading Huawei\'s mission-critical server (KunLun minicomputer), which of the following operations are correct?',
        options: [
            'A. The central management box can upgrade the CMC software and CPLD, and upgrade the CPLD of ACM/CPI/CIM.',
            'B. Mainly control the upgrade process through CMC\'s WebUI to reduce tedious manual upgrade operations.',
            'C. After upgrading the network card firmware, it will take effect without restarting the operating system.',
            'D. In order to reduce the impact of the upgrade on the system, please choose to perform the upgrade operation when the business volume is low.'
        ],
        correctAnswers: ['B', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-19',
        phase: 'Github finds',
        text: 'Which of the following descriptions of CloudStack’s characteristics is correct?',
        options: [
            'A. CloudStack can help users better coordinate servers, storage, and network resources to build a laas platform',
            'B. CloudStack is an open source database software',
            'C. CloudStack can deploy new systems at unlimited scale and faster'
        ],
        correctAnswers: ['A', 'C'],
        type: 'multi'
    },
    {
        id: 'gh-finds-20',
        phase: 'Github finds',
        text: 'Company A purchased a batch of TaiShan servers to build a Web system. Nginx was selected as the Webserver. Which statement about the Nginx process is correct?',
        options: [
            'A. Multiple worker processes are equal and compete equally for requests from clients.',
            'B. The worker process is mainly used to manage the master process',
            'C. The master process is mainly used to handle basic network events',
            'D. After Nginx is started, there will be a master process and a worker process.'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'gh-finds-21',
        phase: 'Github finds',
        text: 'Memory is a crucial component of a server, enabling communications between the storage and the CPU. Which of the following is not a type of memory?',
        options: [
            'A. Random access memory (RAM)',
            'B. Read-only memory (ROM)',
            'C. Cache',
            'D. Hard disk drive (HDD)'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'gh-finds-22',
        phase: 'Github finds',
        text: 'iBMA is an in-band management software for servers, and is important for computing product O&M. Which of the following statements is false about iBMA?',
        options: [
            'A. iBMA runs on the in-band OS and manages single-node hardware. iBMA works with iBMC to manage hardware beyond iBMC direct management.',
            'B. iBMA uses in-band to obtain hardware data, evaluates data plane performance, and assists in hardware planning.',
            'C. iBMA can be integrated with the out-of-band system through Smartkit mapping to realize complete server management.',
            'D. iBMA provides standard Redfish management interfaces to the upper-layer management software iBMC.'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'gh-finds-23',
        phase: 'Github finds',
        text: 'Fusion Director is a centralized O&M platform. Which of the following is not a server management operation supported by Fusion Director?',
        options: [
            'A. Manual addition',
            'B. Batch import',
            'C. DHCP automatic IP address allocation',
            'D. SNMP auto-discovery'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'gh-finds-24',
        phase: 'Github finds',
        text: 'Which of the following statements is true about the ciphertext data decryption provided by the built-in accelerator engine of Huawei Kunpeng processors?',
        options: [
            'A. The accelerator engine is located in the PCIe data encryption card.',
            'B. Encrypted data is read from drives and then processed by the CPU.',
            'C. Data keys stored on drives must be encrypted.',
            'D. Plaintext data can only be transmitted through the on-chip bus but not through the PCIe bus.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'gh-finds-25',
        phase: 'Github finds',
        text: 'Which of the following is the Linux kernel functionality?',
        options: [
            'A. A graphical user interface (GUI)',
            'B. System resources and hardware management',
            'C. Driver management',
            'D. System-user interaction'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-26',
        phase: 'Github finds',
        text: 'A private Yum repository has been deployed using FTP but other servers cannot download resources from it. Which of the following are possible causes?',
        options: [
            'A. The requesting servers are not connected to the Internet.',
            'B. The FTP server does not grant the write permission to the servers.',
            'C. The FTP server does not allow anonymous access.',
            'D. The firewall and SELinux are enabled on the FTP server.'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-27',
        phase: 'Github finds',
        text: 'Which of the following statements are true about openGauss?',
        options: [
            'A. It is a relational database management system.',
            'B. It is an online analytical processing (OLAP) database management system.',
            'C. It supports the atomicity, consistency, isolation, durability (ACID) features of transactions.',
            'D. It can store non-relational data elements.'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-28',
        phase: 'Github finds',
        text: 'Kunpeng processors use ARM instruction sets. Which of the following are advantages of ARM over x86?',
        options: [
            'A. Fixed-length instructions and simple addressing',
            'B. Mature industry chain',
            'C. Support for 64-bit instructions',
            'D. Performs most data operations in registers to accelerate instruction execution'
        ],
        correctAnswers: ['A', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-29',
        phase: 'Github finds',
        text: 'Which of the following login user combinations are supported by the Java integrated remote console (shared)?',
        options: [
            'A. One local user and one VNC user',
            'B. Two local users',
            'C. Two VNC users',
            'D. Five VNC users'
        ],
        correctAnswers: ['B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-30',
        phase: 'Github finds',
        text: 'SmartKit is an O&M tool for Huawei hardware products to improve onsite delivery and maintenance efficiency. Which of the following statements are true about SmartKit?',
        options: [
            'A. Smartkit hardware configuration can be used to configure the iBMC, BIOS, and RAID of a server.',
            'B. SmartKit OS deployment can be used to deploy OSS on servers in batches.',
            'C. SmartKit firmware upgrade can be used to upgrade multiple parts concurrently.',
            'D. SmartKit troubleshooting includes log collection, hardware diagnosis, device repair, and burn-in tests.'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    }
];
