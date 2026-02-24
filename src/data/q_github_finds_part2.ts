import { Question } from './types';

export const githubFindsQuestionsPart2: Question[] = [
    // --- Boolean Questions ---
    {
        id: 'gh-finds-2-1',
        phase: 'Github finds',
        text: 'If a user\'s cloud desktop cannot access the Internet, it must be because the North-South traffic has failed.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-2-2',
        phase: 'Github finds',
        text: 'Using virtualization technology can virtualize a physical server into multiple virtual machines, thereby improving the hardware performance of the physical server.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-2-3',
        phase: 'Github finds',
        text: 'The quantifiable service of cloud computing refers to charging customers based on usage time and usage volume.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-2-4',
        phase: 'Github finds',
        text: 'Hybrid cloud is a deployment model that integrates public and private clouds; industry cloud is a form of hybrid cloud.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-2-5',
        phase: 'Github finds',
        text: 'After the hard disks in a disk array form a RAID group, servers connected to the disk array usually cannot directly access the RAID group; it needs to be further divided into logical units (LUNs) before being assigned to servers.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-2-6',
        phase: 'Github finds',
        text: 'Virtualization features include partitioning, isolation, encapsulation, and independence.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-2-7',
        phase: 'Github finds',
        text: 'Huawei FusionCompute can perceive the global physical resource usage during VM operation, calculate the best host for VM operation through intelligent scheduling algorithms, and run the VM on the best host through hot migration, thereby improving the global service experience.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-2-8',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, to facilitate unified management, each DVS must be configured with a management IP address.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-2-9',
        phase: 'Github finds',
        text: 'The rules within a security group will be deleted along with the security group.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-2-10',
        phase: 'Github finds',
        text: 'When using VNC to access a virtual machine, a network is no longer required.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },

    // --- Unique Choice Questions ---
    {
        id: 'gh-finds-2-11',
        phase: 'Github finds',
        text: 'Which of the following descriptions about FusionCompute clusters is correct?',
        options: [
            'A. A complete cluster should include computing, storage, and network resources',
            'B. All virtual machines in a cluster can share one MAC address',
            'C. A cluster cannot be deleted once created',
            'D. A cluster can only have one type of data storage'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'gh-finds-2-12',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, what is the role of memory limit?',
        options: [
            'A. Guarantee the lower limit of VM memory when memory resources are sufficient',
            'B. Limit the upper limit of VM memory when memory resource contention occurs',
            'C. Guarantee the lower limit of VM memory when memory resource contention occurs',
            'D. Guarantee the upper limit of VM memory when memory resources are sufficient'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-2-13',
        phase: 'Github finds',
        text: 'Which of the following descriptions about the on-demand self-service feature of cloud computing is correct?',
        options: [
            'A. Users do not need to deal with service providers at all when using cloud computing resources',
            'B. After determining the required cloud services, users can complete the application for cloud resources independently',
            'C. Users need to solve all problems by themselves during the use of cloud computing',
            'D. Cloud service providers only need to prepare all services, and the rest is done entirely by users'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-2-14',
        phase: 'Github finds',
        text: 'To prevent telemarketing harassment, calls marked as sales are added to a blacklist. Which technology is similar to this method?',
        options: [
            'A. Port aggregation',
            'B. Port group',
            'C. Default gateway',
            'D. Security group'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'gh-finds-2-15',
        phase: 'Github finds',
        text: 'Which description about the relationship between VRM and CNA is correct?',
        options: [
            'A. CNA hosts can be restarted on the Portal page provided by VRM',
            'B. VRM can only be installed after CNA is installed',
            'C. CNA must be a Huawei server',
            'D. VRM is a virtual machine running within CNA'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'gh-finds-2-16',
        phase: 'Github finds',
        text: 'In the history of Internet development, which milestone event is least related to the emergence and development of cloud computing?',
        options: [
            'A. UCLA used a computer to send "lo" to another computer at Stanford Research Institute',
            'B. US online music service providers settled with media companies',
            'C. TCP/IP protocol standard established',
            'D. www opened to the public'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-2-17',
        phase: 'Github finds',
        text: 'In the OpenStack solution, which module is responsible for providing persistent block storage?',
        options: [
            'A. Cinder',
            'B. Swift',
            'C. Nova',
            'D. Glance'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'gh-finds-2-18',
        phase: 'Github finds',
        text: 'KVM virtualization architecture includes KVM module, QEMU, and Libvirt. Which of the following is incorrect?',
        options: [
            'A. KVM module is mainly responsible for vCPU creation and virtual memory allocation',
            'B. QEMU is mainly responsible for I/O operation simulation',
            'C. Libvirt+QEMU can form a complete virtualization solution',
            'D. KVM+QEMU can form a complete virtualization solution'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'gh-finds-2-19',
        phase: 'Github finds',
        text: 'In FusionCompute, when creating a port group, what does setting the VLAN ID to 0 mean?',
        options: [
            'A. Set the VLAN tag of packets passing through this port group to 0',
            'B. Only allow packets with VLAN 0 tag to pass through this port group',
            'C. Allow zero packets with VLAN tags through',
            'D. Do not make any modifications to the packets passing through this port group'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'gh-finds-2-20',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, which is incorrect about the IMC function?',
        options: [
            'A. It is recommended to enable IMC when CPU models of CNA hosts in a cluster are inconsistent',
            'B. Enabling IMC doesn\'t guarantee successful VM migration between different CPU models; check specific scenarios',
            'C. IMC only supports migration from lower-version CPU feature sets to higher ones',
            'D. It is recommended to enable IMC when memory main frequencies of CNA hosts in a cluster are inconsistent'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },

    // --- Multi Choice Questions ---
    {
        id: 'gh-finds-2-21',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, which features take effect at the cluster level?',
        options: [
            'A. Security group',
            'B. CPU quota',
            'C. Memory overcommitment',
            'D. DRS'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-2-22',
        phase: 'Github finds',
        text: 'When adding shared storage to multiple hosts in Huawei FusionCompute, which operations are correct?',
        options: [
            'A. If storage type is IP SAN, ensure host storage network can reach storage service interfaces',
            'B. Select corresponding hosts when adding data storage',
            'C. Select all hosts when associating storage devices',
            'D. Select all hosts when initializing storage resources'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: 'gh-finds-2-23',
        phase: 'Github finds',
        text: 'Which descriptions about RAID are correct?',
        options: [
            'A. RAID is composed of two or more disks, and its available capacity is the sum of all disk capacities',
            'B. RAID improves I/O performance by concurrently reading/writing data across multiple disks',
            'C. When one disk fails in RAID 5, others can still work, and I/O performance is unaffected',
            'D. Compared with RAID 5, RAID 6 has stronger data recovery capability but lower read/write performance'
        ],
        correctAnswers: ['B', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-2-24',
        phase: 'Github finds',
        text: 'In KVM virtualization, which of the following is correct?',
        options: [
            'A. Host OS can be Linux',
            'B. Host OS can be Windows',
            'C. Guest OS can be Linux',
            'D. Guest OS can be Windows'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-2-25',
        phase: 'Github finds',
        text: 'If a VM is bound to a host in Huawei FusionCompute, which features will be affected?',
        options: [
            'A. Snapshot',
            'B. DRS',
            'C. Hot migration',
            'D. Memory hot-add'
        ],
        correctAnswers: ['B', 'C'],
        type: 'multi'
    },
    {
        id: 'gh-finds-2-26',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, which descriptions about the relationship between port groups and VLANs are correct?',
        options: [
            'A. In Common type, one port group can correspond to one VLAN',
            'B. In Common type, one port group can correspond to multiple VLANs',
            'C. In Trunk type, one port group can correspond to multiple VLANs',
            'D. In Trunk type, one port group can correspond to one VLAN'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-2-27',
        phase: 'Github finds',
        text: 'What are the deployment models of cloud computing?',
        options: [
            'A. Private cloud',
            'B. Public cloud',
            'C. Hybrid cloud',
            'D. Community/Industry cloud'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-2-28',
        phase: 'Github finds',
        text: 'Which are the advantages of using Huawei Cloud EI?',
        options: [
            'A. Elastic resource scaling',
            'B. O&M-free, users only focus on business',
            'C. Basic AI platform providing general AI capabilities',
            'D. One-stop big data basic service'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-2-29',
        phase: 'Github finds',
        text: 'Which are characteristics of FusionSphere?',
        options: [
            'A. Applications allocate resources on demand',
            'B. Broadly compatible with various hardware and software',
            'C. Automated scheduling',
            'D. Rich O&M management'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-2-30',
        phase: 'Github finds',
        text: 'Which of the following belongs to memory overcommitment technology?',
        options: [
            'A. Memory ballooning',
            'B. Memory swapping',
            'C. Memory sharing',
            'D. Memory mapping'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    }
];
