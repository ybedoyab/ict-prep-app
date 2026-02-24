import { Question } from './types';

export const kunpengQuestionsPart2: Question[] = [
    {
        id: 'kp-21',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'The CPU adopts a typical von Neumann architecture, in which data signals enter the controller from the input device and then reach the arithmetic unit for calculation.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['FALSE'],
        type: 'boolean'
    },
    {
        id: 'kp-22',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'BIOS provides an interactive interface for users to make settings, and saves the setting values in CMOS RAM, which is powered by an RTC battery to ensure that the contents of CMOS RAM are not lost after the device is powered off.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-23',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Memory is one of the important components in the computer. Which statement about the definition of memory is wrong?',
        options: [
            'A. Memory is relative to external memory, and its main feature is fast access speed.',
            'B. Memory is also called internal memory. Its function is to back up, copy and permanently store the calculation data in the CPU to improve the reliability of the data.',
            'C. Memory, also called main memory, is a storage space that can be directly addressed by the CPU and is made of semiconductor devices.',
            'D. When the computer is running, the CPU will transfer the data that needs to be calculated into the memory for calculation. When the calculation is completed, the CPU will send the results out. The operation of the memory also determines the stable operation of the computer.'
        ],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-24',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'What is customer-oriented logical layer software, such as ERP, CRM, HR, etc?',
        options: ['A. Application software', 'B. Database software', 'C. Business application layer software', 'D. Middleware'],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'kp-25',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following descriptions of the BIOS operating process is correct?',
        options: [
            'A. Power on -> Hardware initialization -> CPU loads BIOS -> Load boot items -> POST boot hardware self-test -> Process system commands',
            'B. Power on -> Hardware initialization -> CPU loads BIOS -> POST boot hardware self-test -> Load boot items -> Process system commands',
            'C. Power on -> CPU loads BIOS -> Hardware initialization loads boot items -> POST boot hardware self-test -> Process system commands',
            'D. Power on -> CPU loads BIOS -> Hardware initialization -> POST boot hardware self-test -> Load boot items -> Process system commands'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-26',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following comparisons about UDIMM, RDIMM and LRDIMM is correct? (Multiple choices)',
        options: [
            'A. Compared with RDIMM, LRDIMM reduces the load and power consumption of the memory bus and provides the maximum supported capacity of the memory.',
            'B. UDIMM needs to ensure that the transmission distance between the CPU and each memory particle is equal, so that parallel transmission is effective, and this requires a higher manufacturing process, so UDIMM has lower capacity and frequency.',
            'C. UDIMM, a non-ramped dual in-line memory module, the address and control signals directly reach the DRAM chip on the DIMM without going through the buffer, so it is cheap',
            'D. RDIMM supports Buffered mode and high-performance Registered mode, which is more stable than UDIMM and supports the highest capacity of server memory.'
        ],
        correctAnswers: ['A', 'C'],
        type: 'multi'
    },
    {
        id: 'kp-27',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'iBMC provides a wealth of connections, including which of the following? (Multiple choices)',
        options: ['A. IPMI integrated interface', 'B. Redfish integrated interface', 'C. SNMP integrated interface', 'D. User interface for web interface'],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-28',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Engineer A wants to check the capacity, voltage, rate, etc. of memory operation. Which of the following methods can be used to achieve this? (Multiple choices)',
        options: [
            'A. Save the system string through the SOL function (use the pmi tool tool under Windows, configure the BMC IP and BMC password, connect to the server BMC network, and save the string log), search for "DDR 3-" or "DDR 4-"',
            'B. Query through dmicode -t memory under Linux',
            'C. View basic information through BIOS',
            'D. Log in to IBMC Web interface to view'
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-29',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'The FSB is the base rate of the CPU, the unit is MHz. The FSB of the CPU directly determines the speed of data exchange between the CPU and the memory.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-30',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'RAID6 uses two-dimensional parity and supports horizontal or oblique parity, so at least N+2 disks are required.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-31',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'PaaS provides the development and running environment for applications, including middleware and databases. Which of the following upper-layer server software belongs to the PaaS layer? (Multiple choices)',
        options: ['A. KVM 【 laas 】', 'B. MySQL', 'C. CRM 【 SaaS 】', 'D. Java'],
        correctAnswers: ['B', 'D'],
        type: 'multi'
    },
    {
        id: 'kp-32',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'CPU frequencies include main frequency, FSB, bus frequency and multiplier. Which of the following statements about frequency multiplier is wrong?',
        options: [
            'A. The usual overclocking operation of PC is to adjust the multiplier for CPUs that do not lock the multiplier. The overclocking method of adjusting the multiplier is much more stable than adjusting the external frequency.',
            'B. The data transmission speed between the CPU and the system is limited. Blindly pursuing a high main frequency and obtaining a high frequency multiplier will cause an obvious "bottleneck" effect.',
            'C. Under the same FSB, the higher the frequency multiplier, the higher the CPU frequency, which is not limited.',
            'D. The multiplication factor refers to the relative ratio between the CPU main frequency and the FS'
        ],
        correctAnswers: ['C'],
        type: 'unique'
    },
    {
        id: 'kp-33',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Intelligent Platform Management Interface (IPMI) is an open standard hardware management interface specification that defines which of the following specific method for management subsystems to communicate?',
        options: ['A. Combined', 'B. Embedded', 'C. Tile style', 'D. Connected'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-34',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following is wrong about RAID10?',
        options: [
            'A. The first level is a RAID1 mirror pair, and the second level is RAID0.',
            'B. The hard disk utilization rate of RAID10 is 50%',
            'C. RAID10 is a RAID level that combines mirroring and striping.',
            'D. The read and write performance of RAID10 is consistent'
        ],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-35',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'What are the general components of a database system, database management system, and database users?',
        options: ['A. Business application layer system', 'B. Application system', 'C. Data logic system'],
        correctAnswers: ['B'],
        type: 'unique'
    },
    {
        id: 'kp-36',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Traditional BIOS is specially customized for traditional 16-bit processors, with low addressing capabilities and poor performance. UEFI can be applied to any 64-bit processor, with much stronger addressing capabilities and excellent performance.',
        options: ['TRUE', 'FALSE'],
        correctAnswers: ['TRUE'],
        type: 'boolean'
    },
    {
        id: 'kp-37',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following one with a total number of PIN pins of 64 is PCle-?',
        options: ['A. 16x', 'B. 1x', 'C. 8x', 'D. 4x'],
        correctAnswers: ['D'],
        type: 'unique'
    },
    {
        id: 'kp-38',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'When selecting a hard disk, you need to select the correct capacity based on the number of system slots and business demand capacity. Which of the following statements about hard disk capacity is correct?',
        options: [
            'A. NL SAS/SATA capacity is generally an integer multiple of 250G, and 10K/15K SAS hard disk capacity is generally an integer multiple of 500',
            'B. NL SAS/SATA capacity is generally an integral multiple of 200G, and 10K/15K SAS hard disk capacity is generally an integral multiple of 300',
            'C. NL SAS/SATA capacity is generally an integral multiple of 250G, and 10K/15K SAS hard disk capacity is generally an integral multiple of 300G',
            'D. NL SAS/SATA capacity is generally an integral multiple of 200G, and 10K/15K SAS hard disk capacity is generally an integral multiple of 1T'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'kp-39',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'Which of the following does not belong to the functional characteristics of iBMC?',
        options: [
            'A. Managing hardware virtualization capabilities',
            'B. Fault diagnosis and management',
            'C. Virtual KVN and virtual media',
            'D. Rich management interface'
        ],
        correctAnswers: ['A'],
        type: 'unique'
    },
    {
        id: 'kp-40',
        phase: 'Test Exam Online (Kunpeng)',
        text: 'What are network cards classified by protocol type? (Multiple choices)',
        options: ['A. Ethernet card', 'B. IB network card', 'C. FC network card'],
        correctAnswers: ['A', 'B', 'C'],
        type: 'multi'
    }
];
