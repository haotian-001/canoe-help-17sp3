define({"6445":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionChkCreateInconsistentRxDLC.htm",l:-1,t:"ChkCreate_InconsistentRxDLC, ChkStart_InconsistentRxDLC",i:5.3667693925905E-05,a:"CAPL Functions  »  Test Service Library  »  Checks  » ChkCreate_InconsistentRxDLC, ChkStart_InconsistentRxDLC ChkCreate_InconsistentRxDLC, ChkStart_InconsistentRxDLC   Function Syntax dword ChkCreate_InconsistentRxDLC(Node aNode, char [] aCallback); dword ChkStart_InconsistentRxDLC(Node aNode, char ..."},"6446":{y:0,u:"../Content/Topics/CANoeCANalyzer/SmartCharging/SCSimulationOverview.htm",l:-1,t:"Simulation Overview (Smart Charging)",i:5.1352410346048E-05,a:"SmartCharging  » Simulation Overview (Smart Charging) Simulation Overview   Simulation Modes and States Simulation Basics There are three main use cases: Active simulation mode: A charge point or vehicle is simulated automatically, using the internal state machine and data from an XML configuration ..."},"6447":{y:0,u:"../Content/Topics/CAPLFunctions/CommunicationObjects/Functions/CAPLfunctionLookupMeasuredMethod.htm",l:-1,t:"LookupMeasuredMethod",i:2.93763033289521E-05,a:"CAPL Functions  »  Communication Objects  » LookupMeasuredMethod LookupMeasuredMethod   Function Syntax measuredMethodRef * LookupMeasuredMethod(char[] path); Description Searches for the specified measured method. The path must be complete including namespaces and both endpoints: ..."},"6448":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionWriteProFileInt.htm",l:-1,t:"writeProfileInt",i:6.37765321311854E-05,a:"CAPL Functions  »  General  »  Function Overview  » writeProfileInt writeProfileInt   Function Syntax long writeProfileInt(char section[], char entry[], long value, char filename[]); // form 1 long writeProfileInt(char section[], char entry[], long value, char filename[], dword utf16); // form 2 ..."},"6449":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/ProgramNode/ProgramNodeConfiguration.htm",l:-1,t:"Program Node: Configuration",i:7.20292084389327E-05,a:"Program Node  » Configuration Program Node: Configuration Context Menu of a Program Node: Configuration... File name This field displays path and name of the current CAPL source code (*.can). With [Select…] you get a dialog where you can select a (new) CAPL file for the current CAPL node. With ..."},"6450":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclSignalGetTxPhysDouble.htm",l:-1,t:"cclSignalGetTxPhysDouble",i:3.86360090043396E-05,a:" CANoe  »  C Library API  »  Functions  » cclSignalGetTxPhysDouble cclSignalGetTxPhysDouble   Function Syntax int32_t cclSignalGetTxPhysDouble(int32_t signalID, double* value); Description Read the Tx value as physical value of the given signal. Parameters Return Values Example Availability The C ..."},"6451":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/NodeLayerTFS/Functions/CAPLfunctionCoTfsEmcyGetErrorCode.htm",l:-1,t:"coTfsEmcyGetErrorCode",i:3.5857770891039E-05,a:"CAPL Functions  »  CANopen  »  Test Feature Set Node Layer  » coTfsEmcyGetErrorCode coTfsEmcyGetErrorCode (Level 2)   Function Syntax dword coTfsEmcyGetErrorCode( dword nodeID, dword outCanId[1], dword outTimeStamp[1], dword outEmcyCode[1], dword outErrorReg[1], byte outMsCodeBuf[5], dword ..."},"6452":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/NodeLayerTFS/Functions/CAPLfunctionCoTfsSdoCalcCrc.htm",l:-1,t:"coTfsSDOCalcCrc",i:5.24801327606575E-05,a:"CAPL Functions  »  CANopen  »  Test Feature Set Node Layer  » coTfsSDOCalcCrc coTfsSDOCalcCrc (Level 1)   Function Syntax dword coTfsSDOCalcCrc( byte inValueBuf[], dword valueBufSize ); Description This function calculates the CRC checksum for a block transfer ( SDO block upload  or  SDO block ..."},"6453":{y:0,u:"../Content/Topics/CAPLFunctions/VTSystem/Functions/CAPLfunctionVTSSerialSetOnSendHandler.htm",l:-1,t:"SerialSetOnSendHandler",i:0.000103423139903609,a:"CAPL Functions  »  VT System  » SerialSetOnSendHandler SerialSetOnSendHandler   Method  Syntax long SysVarNamespace.SerialSetOnSendHandler( char onSendCallback[]); Description Sets the callback that notifies when a send operation on the serial port of the specified channel is completed successfully. ..."},"6454":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINGetHWTransmitAccuracy.htm",l:-1,t:"linGetHWTransmitAccuracy",i:6.7742916995324E-05,a:"CAPL Functions  »  LIN  » linGetHWTransmitAccuracy linGetHWTransmitAccuracy   Function Syntax dword linGetHWTransmitAccuracy(); Description This function can be used to query the transmit resolution of the LIN hardware in units of 1 Hz. Parameters — Return Values Returns the transmit resolution of ..."},"6455":{y:0,u:"../Content/Topics/CANoeCANalyzer/Sensor/SensorUsagePSI5.htm",l:-1,t:"Working with the PSI5 Protocol",i:7.76510845901457E-05,a:"Option .Sensor  »  PSI5 protocol  » Working with the PSI5 Protocol Working with the PSI5 Protocol   ON THIS PAGE: Overview of the PSI5 System Variables  [▲ back] If you have configured a PSI5 network in the  Sensor Configuration  dialog, CANoe automatically creates the corresponding  system ..."},"6456":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestJoinMostReportEvent.htm",l:-1,t:"TestJoinMostReportEvent",i:0.000162344552846037,a:"CAPL Functions  »  Test Feature Set  » TestJoinMostReportEvent TestJoinMostReportEvent   Function Syntax long TestJoinMostReportEvent (int aFBlockId, int aInstanceId, int aFunctionId) long TestJoinMostReportEvent (char[] aSymbolicMessage, int aFunctionId) long TestJoinMostReportEvent (char[] ..."},"6457":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerTC/Functions/CAPLfunctionIso11783TCILControlInit.htm",l:-1,t:"TCIL_ControlInit",i:5.31862021868361E-05,a:"CAPL Functions  »  ISO11783  »  Task Controller Interaction Layer (TC IL)   » TCIL_ControlInit TCIL_ControlInit   Function Syntax long TCIL_ControlInit(); // form 1 long TCIL_ControlInit(byte deviceName[8]); // form 2 long TCIL_ControlInit(dbNode tc, byte deviceName[8] ); // form 3 Description This ..."},"6458":{y:0,u:"../Content/Topics/CANoeCANalyzer/VTSystem/VTSystemCANoeRT.htm",l:-1,t:"Notes for Use with Distributed Mode (VT System)",i:9.62812652485704E-05,a:"VT System  » Notes for Usage with Distributed Mode Notes for Usage with Distributed Mode   In principle there are no restrictions when running VT System along with  distributed mode . The VT System is connected to the RT server, i.e. the computer on which the CANoe realtime component is executed and ..."},"6459":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/GNSSNodeLayer/Functions/CAPLfunctionGNSSremovewp.htm",l:-1,t:"GNSSRemoveWp",i:2.02312130436992E-05,a:"CAPL Functions  »  J1939  »  GNSS NL  » GNSSRemoveWp GNSSRemoveWp   Function Syntax dword GNSSRemoveWp(); Description The function deletes all waypoints in the waypoint list that were added \n with  GNSSAdd... . \n No waypoints can be deleted during a simulation. Parameters — Return Values error code ..."},"6460":{y:0,u:"../Content/Topics/CAPLFunctions/CarMaker/Functions/CAPLfunctionCarMakerInvokeCommand.htm",l:-1,t:"CarMaker_InvokeCommand",i:5.80642905539631E-05,a:"CAPL Functions  »  CarMaker Interface   » CarMaker_InvokeCommand CarMaker_InvokeCommand   Function Syntax long CarMaker_InvokeCommand(char command[], char result[], long resultSize); Description Synchronously calls a generic command and stores the result. Parameters Return Values APO return code ..."},"6461":{y:0,u:"../Content/Topics/CAPLFunctions/FlexRay/Functions/CAPLfunctionFRGetFrameErrorRate.htm",l:-1,t:"frGetFrameErrorRate",i:3.23882963415035E-05,a:"CAPL Functions  »  FlexRay  » frGetFrameErrorRate frGetFrameErrorRate   Function Syntax long frGetFrameErrorRate(long channel, ValueSelector selector, long channelMask); Description Gets the frame error rate of a FlexRay channel in frames per second [fr/s]. The kind of value to be returned (average, ..."},"6462":{y:0,u:"../Content/Topics/Shared/CAPL/IncludeFiles/IncludeFilesSemantic.htm",l:-1,t:"Include Files: Semantic",i:4.33001686855098E-05,a:"CAPL Introduction  »  Include Files  » Semantic Include Files: Semantic   The following semantic exists if you use Include files in CAPL. CAPL Include files are not simply included as text include. All variables and functions that are included via the Include files will be available as global ..."},"6463":{y:0,u:"../Content/Topics/CAPLFunctions/IP/AUTOSARethIL/Functions/CAPLfunctionAREthAddField.htm",l:-1,t:"AREthAddField",i:9.31547049557515E-05,a:"CAPL Functions  »  Ethernet  »  AUTOSAR Eth IL  » AREthAddField AREthAddField   Function Syntax dword AREthAddField( dword psiHandle, long notificationId, long getterId, long setterId ); Description This function adds a field to a Provided Service Instance that was created by  ..."},"6464":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionFDXEnableFreeRunningMode.htm",l:-1,t:"FDXEnableFreeRunningMode",i:5.22156858377937E-05,a:"CAPL Functions  »  General  »  Function Overview  » FDXEnableFreeRunningMode FDXEnableFreeRunningMode   Function Syntax long FDXEnableFreeRunningMode(long fdxClientHandle, word groupID, word flags, dword cycleTime, dowrd firstDuration); Description This function activates the Free Running mode for ..."},"6465":{y:0,u:"../Content/Topics/CAPLFunctions/DistributedObjects/Objects/CAPLfunctiondistObjContainerRef.htm",l:-1,t:"distObjContainerRef",i:0.000185443277093396,a:"CAPL Functions  »  Distributed Objects  » distObjContainerRef distObjContainerRef   Function Syntax distObjContainerRef * distObjContainerRef \u003cTypedef name\u003e Method  Syntax distObjContainerRef \u003cTypedef name\u003e::Create distObjContainerRef \u003cTypedef name\u003e::Erase distObjContainerRef \u003cTypedef name\u003e::PopBack ..."},"6466":{y:0,u:"../Content/Topics/CAPLFunctions/IP/AUTOSARethIL/Functions/CAPLfunctionAREthAddConsumedEventGroup.htm",l:-1,t:"AREthAddConsumedEventGroup",i:7.0569878026616E-05,a:"CAPL Functions  »  Ethernet  »  AUTOSAR Eth IL  » AREthAddConsumedEventGroup AREthAddConsumedEventGroup   Function Syntax dword AREthAddConsumedEventGroup( dword csiHandle, dword eventGroupId ); Description This function adds an Event Group to a Consumed Service Instance that was created by  ..."},"6467":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/BusStatistic/BusStatistic.htm",l:-1,t:"Bus Statistics",i:0.000116894193597967,a:"Bus statistics are acquired cyclically from the CAN controller, whereby \n the sampling period can be configured in the  CAN Controller Configuration dialog . The CAN controller monitors the bus traffic \n continuously for this purpose. Since updating is cyclic, the total number of frames in the Bus ..."},"6468":{y:0,u:"../Content/Topics/CAPLFunctions/DistributedObjects/Methods/CAPLfunctiondistObjMethodRefCallPhys.htm",l:-1,t:"distObjMethodRef::Call_Phys",i:5.47453279755357E-05,a:"CAPL Functions  »  Distributed Objects  » distObjMethodRef::Call_Phys distObjMethodRef::Call_Phys   Method  Syntax \u003cMethod Return Type\u003e  distObjMethodRef ::Call_Phys (params ...); Description Synchronous call to a method member, i.e. the call waits for the function to be called and the return to be ..."},"6469":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerTC/Functions/CAPLfunctionIso11783TCILGetSectionState.htm",l:-1,t:"TCIL_GetSectionState",i:5.00139850703977E-05,a:"CAPL Functions  »  ISO11783  »  Task Controller Interaction Layer (TC IL)   » TCIL_GetSectionState TCIL_GetSectionState   Function Syntax long TCIL_GetSectionState (dbNode client, dword ddiOfCondensedState, dword elementNumber, dword sectionNumber, dword\u0026 sectionState); // form 1 long ..."},"6470":{y:0,u:"../Content/Topics/CANoeCANalyzer/VisualSequencer/VSCommands/VSCommandSetCyclicA429Word.htm",l:-1,t:"Set Cyclic A429 Word (Visual Sequencer Command)",i:2.07323788374654E-05,a:"Visual Sequencer  »  Commands  » Set Cyclic A429 Word Set Cyclic A429 Word   Description Starts or stops the cyclic sending of an ARINC-429 word that is defined in the database. This command is executed by the ARINC-429 hardware scheduler. The content of the word can be defined with command  Set  ..."},"6471":{y:0,u:"../Content/Topics/SampConf/popups/PopupSDO.htm",l:-1,t:"SDO",i:2.69456903986269E-05,a:"SDO   Service \n Data Object"},"6472":{y:0,u:"../Content/Topics/CANoeCANalyzer/MOST/MOSTHowTos/MOSTHowToReceieveMessagesPackages.htm",l:-1,t:"MOST: How To Receive Messages and Packages (MDP \u0026 MEP)",i:2.68490380791446E-05,a:"MOST  »  How to...  » How To Receive Messages and Packages (MDP \u0026 MEP) MOST: How To Receive Messages and Packages (MDP \u0026 MEP)   You can receive Messages and packages with CAPL:  "},"6473":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerVT/Functions/CAPLfunctionIso11783VTILBlockTxMessage.htm",l:-1,t:"VTIL_BlockTxMessage",i:8.71366177819952E-05,a:"CAPL Functions  »  ISO11783   »  Virtual Terminal Interaction Layer (VT IL)   » VTIL_BlockTxMessage VTIL_BlockTxMessage   Function Syntax long VTIL_BlockTxMessage(dword pgn, dword destinationAddress, qword filterMask, qword filterValue); // form 1 long VTIL_BlockTxMessage(dbNode node, dword pgn, ..."},"6474":{y:0,u:"../Content/Topics/CAPLFunctions/IP/Methods/CAPLfunctionSourceParseAddress.htm",l:-1,t:"ethernetPacket::source::ParseAddress",i:2.1003717686362E-05,a:"CAPL Functions  »  Ethernet  »  Function Overview  » ethernetPacket::source::ParseAddress ethernetPacket::source::ParseAddress   Method  Syntax long  ethernetPacket .source.ParseAddress( char addressAsString[] ); // form 1 long  ethernetPacket .destination.ParseAddress( char addressAsString[] ); // ..."},"6475":{y:0,u:"../Content/Topics/SampConf/Medical/SampConfsMedical.htm",l:-1,t:"Sample Configuration Medical",i:0.000216576837650316,a:" CANoe  »  Sample Configurations  » Medical Sample Configuration Medical  "},"6476":{y:0,u:"../Content/Topics/CANoeCANalyzer/MOST/SimulationConcept/most_simulation_device_multiple.htm",l:-1,t:"Simulation of Multiple Devices (MOST Simulation Concept)",i:3.33177704499599E-05,a:"MOST  »  Simulation \n Concept  » Simulation of multiple devices Simulation of Multiple Devices   CANoe/DENoe can simulate up to 16 MOST devices simultaneously. A precondition is the definition of the devices in the System view of \n the Simulation Setup in accordance with section  Simulation \n of a ..."},"6477":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerVT/Functions/CAPLfunctionIso11783VTILGetNextTAN.htm",l:-1,t:"VTIL_GetNextTAN",i:5.70678718465455E-05,a:"CAPL Functions  »  ISO11783  »  Virtual Terminal Interaction Layer (VT IL)   » VTIL_GetNextTAN VTIL_GetNextTAN   Function Syntax long VTIL_GetNextTAN(byte workingSetMasterAddress, dword\u0026 tan); // form 1 long VTIL_GetNextTAN(dbNode vt, byte workingSetMasterAddress, dword\u0026 tan); // form 2 Description ..."},"6478":{y:0,u:"../Content/Topics/CAPLFunctions/Security/Functions/CAPLfunctionPkcs10SigningRequest_GetVersion.htm",l:-1,t:"Pkcs10SigningRequest_GetVersion",i:6.41810845781887E-05,a:"CAPL Functions  »  Security  » Pkcs10SigningRequest_GetVersion Pkcs10SigningRequest_GetVersion   Method  Syntax dword Pkcs10SigningRequest_GetVersion(qword objectHandle, dword outValue) Description Getter function for the Version field of a PKCS#10 CSR handle. Parameters Selectors — Return Values ..."},"6479":{y:0,u:"../Content/Topics/Shared/CAPL/General/Warnings.htm",l:-1,t:"CAPL Warnings",i:0.00011645358506426,a:"CAPL Introduction  » CAPL Warnings CAPL Warnings   Compiler Commands: #pragma warning"},"6480":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/Trigger/TriggerUserDefinedSymbolicSignal.htm",l:-1,t:"Symbolic Signal Condition",i:3.29606605184709E-05,a:"Trigger Configuration  »  Set of User-defined Conditions  »  Symbolic Signal Condition Symbolic Signal Condition   Here you can edit the properties of a symbolic signal condition. To create a new symbolic signal condition you have to select one of \n the items within the  Symbol Selection  dialog. ..."},"6481":{y:0,u:"../Content/Topics/CAPLFunctions/StructByteAccess/Functions/CAPLfunctionMemCpyN2h.htm",l:-1,t:"memcpy_n2h",i:0.000133890336340839,a:"CAPL Functions  »  Struct Byte Access  » memcpy_n2h memcpy_n2h   Function Syntax void memcpy_n2h(struct dest, byte source[]); // form 1 void memcpy_n2h(struct dest, byte source[], int offset); // form 2 Description Fills the struct with bytes from the array, and translates the byte order of the ..."},"6482":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCSetShutdownRequest.htm",l:-1,t:"SCC_SetShutdownRequest",i:6.24395493115898E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Simulation Data   »  EVSE Functions  » SCC_SetShutdownRequest SCC_SetShutdownRequest   Function Syntax long SCC_SetShutdownRequest ( long ShutdownRequest ) Description Demands the stop of the charging session ..."},"6483":{y:0,u:"../Content/Topics/CAPLFunctions/CAN/Functions/CAPLfunctionIsStdLd.htm",l:-1,t:"isStdId, isExtId",i:0.000106234010808749,a:"CAPL Functions  »  CAN  » isStdId, isExtId isStdId, isExtId   Function Syntax long isStdId(dword id); long isStdId(message m); long isExtId(dword id); long isExtId(message m); Description Checks parameter for  extended identifier  (29 bit) or standard identifier (11 Bit). Parameters Return Values 1 ..."},"6484":{y:0,u:"../Content/Topics/CAPLFunctions/Security/Functions/CAPLfunctionGetX509ObjectFactory.htm",l:-1,t:"GetX509ObjectFactory",i:6.41810845781887E-05,a:"CAPL Functions  »  Security  » GetX509ObjectFactory GetX509ObjectFactory   Method  Syntax dword GetX509ObjectFactory() Description Initialization function for object factory as entry point for the X.509 API. Parameters — Selectors — Return Values Handle (qword) of Type X509ObjectFactory. Example — ..."},"6485":{y:0,u:"../Content/Topics/CAPLFunctions/SystemVariables/Functions/CAPLfunctionSysDefineVariableFloat.htm",l:-1,t:"sysDefineVariableFloat",i:3.65453646929444E-05,a:"CAPL Functions  »  System Variables  » sysDefineVariableFloat sysDefineVariableFloat   Function Syntax long sysDefineVariableFloat(char namespace[], char variable[], double initialValue); // form 1 long sysDefineVariableFloat(char namespace[], char variable[], double initialValue, double minimum, ..."},"6486":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLFunctioncclLinSetWakeupFrameHandler.htm",l:-1,t:"cclLinSetWakeupFrameHandler (CAPL Function)",i:3.86360090043396E-05,a:" CANoe  »  C Library API  »  Functions  » cclLinSetWakeupFrameHandler (CAPL Function) cclLinSetWakeupFrameHandler   Function Syntax struct cclLinWakeupFrame {   int64_t time;   int32_t channel;   uint8_t external;   uint8_t signal; }; int32_t cclLinSetWakeupFrameHandler(int32_t channel, void ..."},"6487":{y:0,u:"../Content/Topics/CAPLFunctions/CommunicationObjects/Methods/CAPLfunctionValueClearChangeFlag.htm",l:-1,t:"valueHandle::ClearChangeFlag",i:4.91658555610517E-05,a:"CAPL Functions  »  Communication Objects  » valueHandle::ClearChangeFlag valueHandle::ClearChangeFlag   Method  Syntax dword valueHandle::ClearChangeFlag() Description Clears the change flag of the value. It will be set again when the value changes the next time. You can wait for the flag to be set ..."},"6488":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionChkCreateJ1939BAM.htm",l:-1,t:"ChkCreate_J1939BAM, ChkStart_J1939BAM",i:5.26266066122392E-05,a:"CAPL Functions  »  Test Service Library  »  Checks  » ChkCreate_J1939BAM, ChkStart_J1939BAM ChkCreate_J1939BAM, ChkStart_J1939BAM   Function Syntax dword ChkCreate_J1939BAM(dword min, dword max, char[] callback1); dword ChkCreate_J1939BAM(dword originatorAddress, dword min, dword max, char[] ..."},"6489":{y:0,u:"../Content/Topics/CANoeCANalyzer/LibrariesPackages/VectorILCAN/VectorILCANStateModel.htm",l:-1,t:"Interaction Layer State Model",i:7.09633330866059E-05,a:" CANoe  »  Libraries \u0026 Add-ons  »  CANoe IL CAN  » Interaction Layer State Model Interaction Layer State Model   If the IL is simulated (default), it knows the following states. Please refer the Callback Interface functions for details how to traverse the state graph. If the IL is not simulated, the ..."},"6490":{y:0,u:"../Content/Topics/CANoeCANalyzer/ADAS/Windows/Scene/ADASSceneWindowGUI.htm",l:-1,t:"User Interface",i:8.54256953933576E-05,a:"Sample Configurations  »  ADAS   »  Scene Window  » User Interface User Interface   Scene view In the scene view, the received sensors, detected objects and environment objects are displayed. The display depends on the  display settings . The perspective of the scene view can be adjusted via a ..."},"6491":{y:0,u:"../Content/Topics/CANoeCANalyzer/Car2x/windows/wlanPacketBuilder/wlanpbWnd.htm",l:-1,t:"User Interface (Car2x WLAN Packet Builder) ",i:7.17141055118835E-05,a:"WLAN Packet Builder  » User Interface User Interface   The user interface of the WLAN Packet Builder is divided into several parts: a button list to add, delete and send packets, the packet list, the packet information area and the area displaying raw frames. Packet list Packet information Raw frame ..."},"6492":{y:0,u:"../Content/Topics/CAPLFunctions/IP/Methods/CAPLfunctionSetVlanId.htm",l:-1,t:"ethernetPacket::SetVlanId",i:6.85694165712658E-05,a:"CAPL Functions  »  Ethernet  »  Function Overview  » ethernetPacket::SetVlanId ethernetPacket::SetVlanId   Method  Syntax long  ethernetPacket .SetVlanId(word vlanId); // form 1 long  ethernetPacket .SetVlanId(dword vlanIndex, word vlanId); // form 2 Description Sets the VLAN ID of an Ethernet ..."},"6493":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionChkControlReset.htm",l:-1,t:"ChkControl_Reset",i:0.000360471099626236,a:"CAPL Functions  »  Test Service Library  »  Commands to Control Checks  » ChkControl_Reset ChkControl_Reset   Function Syntax long ChkControl_Reset(dword aCheckId); Method  Syntax check.Reset(); Description The status (stored values) of the check is initialized. The check does not have to be stopped ..."},"6494":{y:0,u:"../Content/Topics/CAPLFunctions/CANstress/Functions/CAPLfunctionCANstressTrigger.htm",l:-1,t:"CANstressTrigger",i:2.1414782593373E-05,a:"CAPL Functions  »  CANstresss  » CANstressTrigger CANstressTrigger   Function Syntax long CANstressTrigger(); Description Activates the CANstress software trigger. Parameters — Return Values Example — Availability  "},"6495":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestInfoRow.htm",l:-1,t:"TestInfoRow",i:0.000131299723320842,a:"CAPL Functions  »  Test Feature Set  » TestInfoRow TestInfoRow   Function Syntax void TestInfoRow (long handle, int indent); void TestInfoRow (long handle, int indent, char[] text); Description Creates a row in an info table. First version of the function creates a row without content. The content ..."},"6496":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939NodeLayer/Functions/CAPLfunctionJ1939GetName.htm",l:-1,t:"J1939GetName",i:1.99346589967799E-05,a:"CAPL Functions  »  J1939  »  J1939 NL  » J1939GetName J1939GetName   Function Syntax dword J1939GetName( char[] busName, dword componentMask, char deviceName[] ); dword J1939GetName( long busHandle, dword componentMask, char deviceName[] ); Description This function returns the name of a device that ..."},"6497":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILtimOperatorAcknowledge.htm",l:-1,t:"Iso11783IL_TIMOperatorAcknowledge",i:4.71979432188944E-05,a:"CAPL Functions  »  ISO11783   »  ISO11783 Interaction Layer   » Iso11783IL_TIMOperatorAcknowledge Iso11783IL_TIMOperatorAcknowledge   Function Syntax long Iso11783IL_TIMOperatorAcknowledge( ); // form 1 long Iso11783IL_TIMOperatorAcknowledge(dbNode server); // form 2 Description This function ..."},"6498":{y:0,u:"../Content/Topics/CAPLFunctions/VTSystem/Functions/CAPLfunctionVTSvtsSetIntegrationTime.htm",l:-1,t:"vtsSetIntegrationTime",i:7.05359987668738E-05,a:"CAPL Functions  »  VT System  » vtsSetIntegrationTime vtsSetIntegrationTime   Function Syntax long vtsSetIntegrationTime (char Target[], double IntTime); Description Mean and RMS values are calculated in a moving measurement time window. The length of the time window can be set with this function. ..."},"6499":{y:0,u:"../Content/Topics/CANoeCANalyzer/Test/TestModules/XML/XMLFileCallNETTestFunction.htm",l:-1,t:"Call .NET Test Function (XML Test Module)",i:2.53237417532144E-05,a:"Test Feature Set  » XML » Call .NET Test Function Call .NET Test Function   In the  test module configuration dialog , you can add .NET assemblies to the XML test module via the Modules tab. The assemblies contain test functions that can be called from the XML test module. In order to create the ..."},"6500":{y:0,u:"../Content/Topics/CAPLFunctions/Scope/Classes/CAPLFunctionScopeSinglePolygonBitMask.htm",l:-1,t:"ScopeSinglePolygonBitMask",i:9.23590689772854E-05,a:"CAPL Functions  »  Scope  » ScopeSinglePolygonBitMask ScopeSinglePolygonBitMask   This structure defines a bitmask for the eye diagram analysis. Methods — Attributes  "},"6501":{y:0,u:"../Content/Topics/Shared/CAPL/General/SymbolicAccessDatabase.htm",l:-1,t:"Symbolic Database Access",i:0.000102700790359285,a:"CAPL Introduction  » Symbolic Database Access Symbolic Database Access   CAPL enables symbolic access to database objects with use in modeling libraries (DLL files), e.g. TestServiceLibrary. Database objects are identified with the following syntax Network access: [dbNetwork::]DBName Node access: ..."},"6502":{y:0,u:"../Content/Topics/CAPLFunctions/CANstress/Functions/CAPLfunctionCANstressSetLimitedDisturbanceNumber.htm",l:-1,t:"CANstressSetLimitedDisturbanceNumber",i:2.1414782593373E-05,a:"CAPL Functions  »  CANstresss  » CANstressSetLimitedDisturbanceNumber CANstressSetLimitedDisturbanceNumber   Function Syntax void CANstressSetLimitedDisturbanceNumber (dword cycles, dword distPerCycle, dword cyclePause); Description Sets the Limited number of disturbances disturbance mode. In this ..."},"6503":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/Trace/TraceWindow.htm",l:-1,t:"Trace Window",i:0.0034208875754605,a:" CANoe  »  Analysis Windows  » Trace Window Trace Window Ribbon | Analysis Tab |Trace|View / New  "},"6504":{y:0,u:"../Content/Topics/CANoeCANalyzer/General/CANwin_Hints_for_SP_and_full_version.htm",l:-1,t:"Hints for Full and Service Pack Installation",i:1.91306081808397E-05,a:" CANoe  » Hints for Full and Service Pack Installation Hints for Full and Service Pack Installation   Hints for Full Installation Several CANoe full installations \n can be installed on a computer in parallel. If a full version is installed on an existing CANoe \ndirectory, please be aware, that ..."},"6505":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/Replay/IDD_RB_CHANNELMAPPING_CFG_PAGE.htm",l:-1,t:"Replay Configuration: Channel Mapping",i:0.000226007687153944,a:"Replay Block  » Configuration » Channel Mapping Replay Configuration: Channel Mapping   Here you configure the allocation of the channels found in the logging file to the channels available in the configuration. The possible option settings are identical for all supported bus systems. The Source ..."},"6506":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/Trigger/TriggerModeEntire.htm",l:-1,t:"Trigger Mode: Entire Measurement",i:7.44824049598503E-05,a:"Trigger Configuration  » Trigger Mode Entire Measurement Trigger Mode: Entire Measurement   If you select this mode the entire measurement will be logged. Therefore you cannot select any supplemental trigger conditions nor \n a time window.  "},"6507":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/j1939tsl/xml/j1939tslpg.htm",l:-1,t:"XML - j1939_pg",i:6.4169059189687E-05,a:"J1939  »  J1939 Test Service Library  »  XML Overview XML - j1939_pg   CAPL Function Overview  •   XML Overview"},"6508":{y:0,u:"../Content/Topics/CAPLFunctions/IP/SOMEIPIL/Functions/CAPLfunctionSomeIpSetVerbosity.htm",l:-1,t:"SomeIpSetVerbosity",i:1.96047729647541E-05,a:"CAPL Functions  »  Ethernet  »  SOME/IP IL  » SomeIpSetVerbosity SomeIpSetVerbosity   Function Syntax long SomeIpSetVerbosity( long verbosity);  Description Sets the verbosity level of SOME/IP IL messages in the Write Window. Parameters Return Values Example Availability"},"6509":{y:0,u:"../Content/Topics/CAPLFunctions/ADAS/Functions/CAPLfunctionTestWaitForADASDetectedObjectTimeToCollision.htm",l:-1,t:"TestWaitForADASDetectedObjectTimeToCollision",i:6.37006756395199E-05,a:"CAPL Functions  »  ADAS  » TestWaitForADASDetectedObjectTimeToCollision TestWaitForADASDetectedObjectTimeToCollision   Function Syntax long TestWaitForADASDetectedObjectTimeToCollision (dword overUnder, float threshold, long aTimeout); // form 1 long TestWaitForADASDetectedObjectTimeToCollision ..."},"6510":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/EventProcedures/CAPLfunctionOnMOSTAllocTable.htm",l:-1,t:"OnMostAllocTable",i:5.3765789551858E-05,a:"CAPL Functions  »  MOST  » OnMostAllocTable OnMostAllocTable   Function Syntax OnMostAllocTable(); Description OnMostAllocTable is called as soon as the \n network interface detects a change in the MOST allocation table. The allocation table contains the reservation status of the synchronous MOST ..."},"6511":{y:0,u:"../Content/Topics/CAPLFunctions/DistributedObjects/Methods/CAPLfunctiondistObjRefUnannounceAll.htm",l:-1,t:"distObjRef::UnannounceAll",i:7.72064779584729E-05,a:"CAPL Functions  »  Distributed Objects  » distObjRef::UnannounceAll distObjRef::UnannounceAll   Method  Syntax void  distObjRef ::UnannounceAll(); Description This is a collective operation that unannounces all provided members which use the publish-subscribe pattern with announcements. Parameters — ..."},});