import { Question } from './types';

export const kunpengQuestionsPart3: Question[] = [
    {
        id: 'kp-41',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Early hard disks were connected to IDE, SCSI, etc. With the development of hard disk technology, these connection types have disappeared. The current mainstream hard disks use SATA, SAS, PCIE, etc. Which of the following statements about SAS and SATA is correct?',
        options: [
            'A. In terms of the physical layer, SAS connections and SATA connections are compatible with each other. SATA hard drives can be used directly in a SAS environment, and SAS can also be used in a SATA environment.',
            'B. At present, most mobile hard drives for home use are SAS connected, while SATA connected is for enterprise-level applications.',
            'C. SAS is a new generation of SCSI technology that uses parallel technology to obtain higher transmission speeds and improves internal space by shortening the connection lines.',
            'D. SAS can meet high-performance, high-reliability applications, while SATA can meet large-capacity, non-critical business applications.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-42',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following understandings of server features is incorrect?',
        options: [
            'A. Reliability refers to the ability of a product to maintain all its functions for as long as possible',
            'B. The core guiding concept of RAS design is to ensure the sustainable and normal operation of customer business to the greatest extent',
            'C. Ease of use refers to the ability to locate and repair the system as quickly as possible after a system failure',
            'D. Availability refers to the ability of a product to maintain all its functions for as long as possible'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-43',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Development of bus technology, PC/XT->ISA bus->Extended ISA bus->AGP bus->PCI bus->PCI-Express.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['FALSE'],
        type: 'boolean'
    },
    {
        id: 'kp-44',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Intel’s Quick Path Interconnect technology is abbreviated as QPI, which is translated as Quick Path Interconnect. It is used to achieve direct interconnection between chips. Which of the following statements about QPI is correct?',
        options: [
            'A. Another highlight of QPI is that it supports multiple system bus connections, which Intel calls multi-FS',
            'B. A set of QPI has 10 data transmission lines, as well as clock signals for the transmitter (TX) and receiver (RO)',
            'C. Total QPI bus bandwidth = number of transmissions per second (i.e QPI frequency) x valid data transmitted each time (i.e 16bit/8=2Byte) x bidirectional',
            'D. QPI is a serial high-speed point-to-point connection protocol based on packet transmission, which uses differential signals and specialized clocks for transmission.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-45',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which component does not belong to a common computing unit?',
        options: ['A. CPU', 'B. ASIC', 'C. NPU', 'D. GPU', 'E. FPGA'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-46',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'The following is Engineer A’s understanding of CPU, which one is correct? (Multiple choices)',
        options: [
            'A. The CPU has strong management capabilities and is good at management and scheduling, such as data reading, file management, etc.',
            'B. Compared with GPU, CPU is parallel during data processing, so it is suitable for processing large-scale data operations.',
            'C. CPU is the computing core and control core of a computer',
            'D. Compared with other chips, the CPU has the strongest computing power and the largest number of core processing'
        ],
        correctAnswers: ['A', 'C'],
        type: 'multi'
    },
    {
        id: 'kp-47',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following statements about servers running outside the cluster is incorrect?',
        options: [
            'A. Monitor the health of the cluster',
            'B. Clients on these servers are cluster nodes that require cluster awareness',
            'C. Can act as a license server for applications running inside the cluster',
            'D. Serves as a central user account database'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-48',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Server clusters have strong scalability. As demand and load increase, which of the following methods can generally be used to increase the performance of the cluster?',
        options: [
            'A. Increase the networking bandwidth in the cluster',
            'B. Increase the memory capacity of a single server in the cluster',
            'C. Add a new cluster server to the cluster system',
            'D. Replace the hard drive of a single server in the cluster with a high IO solid state drive'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'kp-49',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'The following is Engineer A’s understanding of LVS cluster, which one is correct? (Multiple choices)',
        options: [
            'A. LVS has three working modes: LVS-NAT (address translation), LVS-DR (direct routing), and LVS-TUN (tunnel)',
            'B. Commonly used scheduling strategies for LVS include round-robin scheduling, weighted round-robin scheduling, minimum number of connections, fast response priority, etc.',
            'C. LVS is a virtual server cluster that works on the seventh layer of the network system and uses IP load balancing technology and content-based request distribution technology on the fourth layer.',
            'D. The LVS cluster is mainly composed of three parts: load scheduler, server pool (server pool/Realserver), and shared storage (shared storage)'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-50',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following is the correct understanding of the LVS+tomcat cluster model? (Multiple choices)',
        options: [
            'A. LVS-NAT, Network Address Translation, modify the target IP of the request message',
            'B. This load scheduling technology implemented in the Linux kernel is called Linux Virtual Server (LVS)',
            'C. LVS-DR: Direct Routing, controlling the encapsulation of new MAC addresses',
            'D. LVS-TUN: IP Tunneling, adding a new IP header to the original request IP message'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-51',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following is wrong about stateless computing management?',
        options: [
            'A. All basic configuration management within the box can be completed directly without relying on management tools outside the box.',
            'B. It can simplify the network features of the switch board and facilitate future expansion to support other switch boards.',
            'C. When basic configuration management is extended to a single cabinet, there is still no need to rely on outside-the-box management tools for configuration.',
            'D. Supports state-independent calculations. When replacing hardware with the same specifications, additional configuration is required.'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-52',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'A cluster is a group of service entities that work together to improve efficiency by increasing the number of tasks executed per unit time.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-53',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following is the correct understanding of the characteristics of heterogeneous computing? (Multiple choices)',
        options: [
            'A. GPU and CPU can work together to form a heterogeneous computing system. The advantages of heterogeneous computing are computing acceleration and energy saving.',
            'B. Common heterogeneous system architectures include CPU+GPU , GPU+FPGA, CPU+specialized chip',
            'C. The purpose of heterogeneous computing is mainly to solve the problem of insufficient CPU computing power.',
            'D. Heterogeneous computing is to develop a series of software and hardware standards so that different types of computing devices can share the computing process and results.'
        ],
        correctAnswers: ['A', 'B', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-54',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following statements about HPC high-performance computing is incorrect?',
        options: [
            'A. Early HPC was based on customized computers and was dedicated to specific fields such as basic scientific research and national defense strategy. With the development of technology, most HPC is now built based on the cluster architecture of X86 servers.',
            'B. HPC stands for High Performance Computing, which refers to a single computer system that uses many processors or a computing system and environment that uses multiple computer clusters for computing purposes.',
            'C. HPC is super computing, which uses computers to research, design products and support complex decision-making.',
            'D. HPC computing clusters are mainly composed of computing servers, shared storage, highspeed interconnection equipment and supporting management software, platform software and application software.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-55',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'A system constructed from one or several general-purpose computing units plus one or several dedicated computing units is a heterogeneous computing system. The computing method used by heterogeneous systems to perform general-purpose computing tasks is heterogeneous computing.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-56',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Puppet and Ansible are both automated operation and maintenance management tools. Which of these two operation and maintenance tools is wrongly understood?',
        options: [
            'A. The biggest feature of Ansible is that there is no need to install an agent on the connected device.',
            'B. The resource types that Puppet can support include files, installation packages, scheduled tasks, user management, etc.',
            'C. Ansible is written in Python and uses SSH keys for authentication by default.',
            'D. Compared to Ansible, Puppet remote host does not require a client'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-57',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'What are the commonly used deployment models of cloud computing? (Multiple choices)',
        options: ['A. Hybrid cloud computing', 'B. Community cloud computing', 'C. Public cloud computing', 'D. Private cloud computing'],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-58',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Among the following main modules of the basic structure of the HPC system, which one does not have application scenario specificity?',
        options: ['A. Operating system', 'B. Development tools', 'C. Middleware', 'D. Job management'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'kp-59',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Azure Stack is an extension of Microsoft’s public cloud platform Azure and Microsoft’s hybrid cloud solution.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-60',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which role does Huawei HiSilicon play in the chip industry chain?',
        options: ['A. Terminal application', 'B. Chip design', 'C. Chip manufacturing', 'D. Chip packaging and testing'],
        correctAnswers: ['B'],
        type: 'unique'
    }
];
