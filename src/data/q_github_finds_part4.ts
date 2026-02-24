import { Question } from './types';

export const githubFindsQuestionsPart4: Question[] = [
    // --- Unique Choice Questions ---
    {
        id: 'gh-finds-4-1',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, when a user finds that a VM is stuck after logging in via VNC (e.g., cannot open files), what is the most likely cause?',
        options: [
            'A. VM damage',
            'B. Business link instability',
            'C. Management link instability',
            'D. Storage link instability'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'gh-finds-4-2',
        phase: 'Github finds',
        text: 'A user applied for a Cloud Hard Disk on Huawei Cloud. What service model does this belong to?',
        options: [
            'A. IaaS',
            'B. DaaS',
            'C. PaaS',
            'D. SaaS'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'gh-finds-4-3',
        phase: 'Github finds',
        text: 'Which description about bare device mapping (RDM) is incorrect?',
        options: [
            'A. Disks using RDM have the best performance',
            'B. It is recommended to install the OS on a disk using RDM',
            'C. A data store using RDM can only correspond to one LUN on SAN storage',
            'D. A data store using RDM can only correspond to one disk'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-4-4',
        phase: 'Github finds',
        text: 'In Linux VMs, which of the following can manage logical volumes?',
        options: [
            'A. OVM',
            'B. LVM',
            'C. PVM',
            'D. DVM'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-4-5',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, which component corresponds to a traditional Layer 2 switch?',
        options: [
            'A. Router',
            'B. Hub',
            'C. DVS (Distributed Virtual Switch)',
            'D. Layer 3 Switch'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'gh-finds-4-6',
        phase: 'Github finds',
        text: 'Which description about VNC is correct?',
        options: [
            'A. VNC must support Linux OS',
            'B. The controlled computer must install VNC Server',
            'C. VNC is a heavy remote control software',
            'D. The controlling host must install VNC Server'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-4-7',
        phase: 'Github finds',
        text: 'In which scenario is it NOT recommended to enable memory overcommitment?',
        options: [
            'A. Ordinary office cloud desktops',
            'B. Telecom business halls',
            'C. Graphic workstations',
            'D. Bank window office'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'gh-finds-4-8',
        phase: 'Github finds',
        text: 'Which description about roles in Huawei FusionCompute is correct?',
        options: [
            'A. If a user has multiple roles, permissions are determined by the role with highest priority',
            'B. A role can have one or more different operation permissions',
            'C. Role operation permissions cannot be modified',
            'D. A user can only have one role'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },

    // --- Boolean Questions ---
    {
        id: 'gh-finds-4-9',
        phase: 'Github finds',
        text: 'Docker images are used to create containers; they are read-only and cannot be directly modified.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-4-10',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, Tools installed on a VM are irrelevant to the VM\'s OS type and version.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-4-11',
        phase: 'Github finds',
        text: 'When deploying VMs quickly using a template, the generated VM configuration remains consistent with the template.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-4-12',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, the system disk of a VM cannot be unbound.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-4-13',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, if a bond has only one physical port, that pNIC cannot be removed directly.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-4-14',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, snapshots can be created for CNA hosts.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-4-15',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, administrators can fill in host info in a template and import them all at once to batch add hosts.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-4-16',
        phase: 'Github finds',
        text: 'In OpenStack, Ceilometer itself provides billing (charging) capability.',
        options: ['True', 'False'],
        correctAnswers: ['False'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-4-17',
        phase: 'Github finds',
        text: 'Virtualization is the logical representation of resources, which is not constrained by physical limits.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },
    {
        id: 'gh-finds-4-18',
        phase: 'Github finds',
        text: 'Using Virtio in KVM can improve network card speed because I/O requests are sent directly from frontend driver to backend driver.',
        options: ['True', 'False'],
        correctAnswers: ['True'],
        type: 'boolean'
    },

    // --- Multi Choice Questions ---
    {
        id: 'gh-finds-4-19',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, if a Windows VM encounters a blue screen, what actions can the system perform?',
        options: [
            'A. HA the VM',
            'B. Restore the VM using a snapshot',
            'C. Restart the VM',
            'D. Do nothing'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-4-20',
        phase: 'Github finds',
        text: 'Which description about the extensive network access characteristic of cloud computing is correct?',
        options: [
            'A. Users can use self-purchased cloud resources through different terminals over the network',
            'B. Users can use resources at any time period via network',
            'C. Users can check resource status at any time via network',
            'D. Users can use resources at different locations via network'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-4-21',
        phase: 'Github finds',
        text: 'Which of the following components are part of KVM management tools?',
        options: [
            'A. Libvirt',
            'B. QEMU',
            'C. Virt-Manager',
            'D. ESXi'
        ],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    },
    {
        id: 'gh-finds-4-22',
        phase: 'Github finds',
        text: 'Which description about security groups and port groups in Huawei FusionCompute is incorrect?',
        options: [
            'A. A vNIC connects to one virtual port of a port group, and one vNIC associates with one DVS',
            'B. Port group is a collection of virtual ports, while security group is a collection of safety rules',
            'C. One DVS can have multiple port groups; one VM can be protected by multiple security groups',
            'D. Security groups protect VMs based on port groups'
        ],
        correctAnswers: ['A', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-4-23',
        phase: 'Github finds',
        text: 'Which of the following are involved in VM hot migration constraints in FusionCompute?',
        options: [
            'A. VM status must be "Running"',
            'B. Destination host cannot be in maintenance mode',
            'C. Must not have shared disks attached',
            'D. VM cannot use bare device type data store'
        ],
        correctAnswers: ['A', 'B'],
        type: 'multi'
    },
    {
        id: 'gh-finds-4-24',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, if a VM binds a USB device, which features will be affected?',
        options: [
            'A. VM resource expansion',
            'B. VM restart',
            'C. VM hot migration',
            'D. Cluster scheduling policy'
        ],
        correctAnswers: ['C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-4-25',
        phase: 'Github finds',
        text: 'In Huawei FusionCompute, what can be the destination for VM storage hot migration?',
        options: [
            'A. Different storage devices',
            'B. Different virtual disks',
            'C. Different storage resources',
            'D. Different data stores'
        ],
        correctAnswers: ['A', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'gh-finds-4-26',
        phase: 'Github finds',
        text: 'Which of the following are common disk array types?',
        options: [
            'A. MAID',
            'B. RAID',
            'C. JBOD',
            'D. SBOD'
        ],
        correctAnswers: ['B', 'C'],
        type: 'multi'
    },
    {
        id: 'gh-finds-4-27',
        phase: 'Github finds',
        text: 'Which description about KVM and Xen is correct?',
        options: [
            'A. Xen VMs can be converted to KVM VMs',
            'B. Dom0 and DomU are concepts in KVM',
            'C. KVM and Xen are both open-source Hypervisors',
            'D. KVM and Xen can run in the same Host OS'
        ],
        correctAnswers: ['A', 'C'],
        type: 'multi'
    },
    {
        id: 'gh-finds-4-28',
        phase: 'Github finds',
        text: 'When binding a disk in Huawei FusionCompute, if you want to ensure snapshots do not involve this disk and restores do not revert it, which mode should you use?',
        options: [
            'A. Independent-Nonpersistent',
            'B. Independent-Persistent',
            'C. Independent',
            'D. Dependent'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'gh-finds-4-29',
        phase: 'Github finds',
        text: 'A VM can communicate with other VMs normally. Which are necessary conditions?',
        options: [
            'A. Configure a static IP address',
            'B. Configure a correct IP address',
            'C. Configure a correct MAC address',
            'D. Configure a gateway address'
        ],
        correctAnswers: ['B', 'C'],
        type: 'multi'
    },
    {
        id: 'gh-finds-4-30',
        phase: 'Github finds',
        text: 'Which description about VIMS file system is incorrect?',
        options: [
            'A. VIMS is compatible with FC SAN, IP SAN, and local disks',
            'B. VIMS is the technical basis for thin provisioning, snapshots, and migration',
            'C. VIMS is a high-performance cluster file system',
            'D. VIMS is an industry-standard storage virtualization file system'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    }
];
