define({"6379":{y:0,u:"../Content/Topics/CAPLFunctions/VTSystem/Functions/CAPLfunctionVTSvtsLoadWFBitStream.htm",l:-1,t:"vtsLoadWFBitStream",i:0.000100381272620179,a:"CAPL Functions  »  VT System  » vtsLoadWFBitStream vtsLoadWFBitStream   Function Syntax long vtsLoadWFBitStream (char Target[], char filepath[]); Description The function loads a bitstream (a sequence of bit values) for the channel from the specified file. The bitstream is used to stimulate the ECU ..."},"6380":{y:0,u:"../Content/Topics/CAPLFunctions/Diagnostics/Functions/CAPLfunctionDiagConfigureChannel.htm",l:-1,t:"_Diag_ConfigureChannel",i:4.18341899206929E-05,a:"CAPL Functions  »  Diagnostics  » _Diag_ConfigureChannel _Diag_ConfigureChannel   Function Syntax void _Diag_ConfigureChannel(char target[]); Description This callback function will be called when a diagnostic request has to be sent to a new target. The CAPL node can configure the transport ..."},"6381":{y:0,u:"../Content/Topics/CAPLFunctions/CAN/Functions/CAPLfunctionGetFirstCANdbFileName.htm",l:-1,t:"getFirstCANdbFilename",i:0.000121328956162154,a:"CAPL Functions  »  CAN  » getFirstCANdbFilename getFirstCANdbFilename   Function Syntax dword getFirstCANdbFilename( char buffer[], dword size); Description Finds out the filename of the first assigned database. Parameters Return Values If successful unequal 0, otherwise 0. Example Availability ..."},"6382":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/IG/IGpduExamples.htm",l:-1,t:"Examples (PDU IG)",i:3.89896050483199E-05,a:"PDU Interactive Generator  » Examples Examples   Example 1: Add a PDU to the PDUs View Situation The following PDUs from the assigned database PowerTrain should be triggered with the trigger conditions shown: ABSdata triggers cyclically (50 ms cycle time). Update payload periodically every 50 ms. ..."},"6383":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectCANoe4Server.htm",l:-1,t:"CANoe4Server (COM Object)",i:8.4123625953603E-05,a:" CANoe  »  COM Interface  »  Objects  » CANoe4Server CANoe4Server Application  »  Configuration  » CANoe4Server Description The CANoe4Server object exports the currently loaded configuration to the specified RTCFG file for use with CANoe4SW Server Edition. Properties — Methods Events — Example ..."},"6384":{y:0,u:"../Content/Topics/CANoeCANalyzer/Car2x/protocols/wave/protocolWaveWSA.htm",l:-1,t:"WAVE Service Advertisement (Car2x)",i:0.000169420206849334,a:"Protocol Overview  » WAVE Services Advertisement  WAVE Services Advertisement    Protocol Information The WAVE Service Advertisement protocol (IEEE 1609.3) is a network protocol that provides information about services on other channels. After receipt of a WSA message, an ITS station is therefore ..."},"6385":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINtpDataReq.htm",l:-1,t:"LINtp_DataReq",i:3.89520431734087E-05,a:"CAPL Functions  »  LIN  » LINtp_DataReq LINtp_DataReq   Function Syntax void LINtp_DataReq(byte data[], long numData, long NAD); Description Send the given data. Once all data has been sent, the callback  LINtp_DataCon  is called. If there has been an error, LINtp_ErrorInd is called. Parameters ..."},"6386":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/kMenuNotificationEnableDisable.htm",l:-1,t:"Deactivating Function Blocks",i:4.56897685390851E-05,a:"Measurement Setup  »  Function Blocks  » Deactivate Deactivating Function Blocks   If you wish to exclude a function block from the measurement you can deactivate it before the measurement. This is especially helpful if you have already configured a block, and instead of deleting it, you only wish ..."},"6387":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Popups/CAPLfunctionsLINSlaveID.htm",l:-1,t:"SlaveId",i:1.91306081808397E-05,a:"SlaveId User-definable handle to a Slave that is implemented here with a Finite State Machine (FSM). Valid handles lie in the range from 0 to 63."},"6388":{y:0,u:"../Content/Topics/CANoeCANalyzer/AFDX/procedures/afdxSendReceiveICMPmessages.htm",l:-1,t:"Send and Receive ICMP Messages (AFDX)",i:5.93617202015955E-05,a:"AFDX  » Procedures  » Send and Receive ICMP Messages  Send and Receive ICMP Messages   An ICMP may only be transmitted with an a664Frame. The following steps are necessary: A received ICMP message is handled within the event procedure \" ICMP \". Usually the following steps are necessary to answer an ..."},"6389":{y:0,u:"../Content/Topics/CAPLFunctions/Car2x/Functions/CAPLfunctionC2xSecPacketIsSecured.htm",l:-1,t:"C2xSecPacketIsSecured",i:4.80525515721617E-05,a:"CAPL Functions  »  Car2x  » C2xSecPacketIsSecured C2xSecPacketIsSecured   Function Syntax long C2xSecPacketIsSecured (long packetHandle); Description Checks if the packet is secured by a security layer ( Security Header  or  WAVE Security Services ). Parameters Return Values Example Availability"},"6390":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/CANoeCANalyzerDataGraphicSignals.htm",l:-1,t:"Missing Measurement Values for Signals in Data and Graphics Window",i:9.00364536884981E-05,a:" CANoe  »  Windows  » Missing Measurement Values for Signals in Data and Graphics Window Missing Measurement Values for Signals in Data and Graphics Window   Unique channel assignment of received signals Are you experiencing the problem that received signals are not displayed in the  Data Window  or ..."},"6391":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/Functions/CAPLfunctionMOSTGetNodeAdr.htm",l:-1,t:"mostGetNodeAdr, mostGetGroupAdr, mostGetAltPktAdr, mostGetNodePosAdr",i:6.98366153654319E-05,a:"CAPL Functions  »  MOST  » mostGetNodeAdr, mostGetGroupAdr, mostGetAltPktAdr, mostGetNodePosAdr mostGetNodeAdr, mostGetGroupAdr, mostGetAltPktAdr, mostGetNodePosAdr   Function Syntax long mostGetNodeAdr(long channel); // form 1 long mostGetGroupAdr(long channel); // form 2 long mostGetAltPktAdr(long ..."},"6392":{y:0,u:"../Content/Topics/CAPLFunctions/VTSystem/Functions/CAPLfunctionVTSvtsSetTransferCycle.htm",l:-1,t:"vtsSetTransferCycle",i:6.88284276300904E-05,a:"CAPL Functions  »  VT System  » vtsSetTransferCycle vtsSetTransferCycle   Function Syntax long vtsSetTransferCycle (char Target[], double CycleTime); Description Sets the cycle time for retrieving the measured value of a system variable from the VT System and writing it to the corresponding system ..."},"6393":{y:0,u:"../Content/Topics/CAPLFunctions/FlexRay/Functions/CAPLfunctionFREnableStatistics.htm",l:-1,t:"frEnableStatistics",i:3.23882963415035E-05,a:"CAPL Functions  »  FlexRay  » frEnableStatistics frEnableStatistics   Function Syntax void frEnableStatistics(long channel, long flag); // Form 1 void frEnableStatistics(long flag); // Form 2\n Description Enables or disables FlexRay statistics on a specific (Form 1) or all (Form 2) FlexRay channels. ..."},"6394":{y:0,u:"../Content/Topics/CAPLFunctions/Security/Functions/CAPLfunctionX509DNAttribute_SetAttribute.htm",l:-1,t:"X509DNAttribute_SetAttribute",i:6.41810845781887E-05,a:"CAPL Functions  »  Security  » X509DNAttribute_SetAttribute X509DNAttribute_SetAttribute   Method  Syntax dword X509DNAttribute_SetAttribute(qword objectHandle, qword newValue) Description Setter function for the Attribute field, i.e. the OID of the DN attribute, of the X.509 DN Attribute handle. ..."},"6395":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestSetMsgCycleTime.htm",l:-1,t:"TestSetMsgCycleTime",i:0.000311465328755168,a:"CAPL Functions  »  Test Feature Set  » TestSetMsgCycleTime TestSetMsgCycleTime   Function Syntax long TestSetMsgCycleTime(dbMsg aMessage, dword aNewCycleTime); long TestSetMsgCycleTime(dword aMessageId, dword aNewCycleTime); long TestSetMsgCycleTime(char aMessageName[], dword aNewCycleTime); ..."},"6396":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINGetBaudRateMaster.htm",l:-1,t:"linGetBaudRateMaster",i:3.89520431734087E-05,a:"CAPL Functions  »  LIN  » linGetBaudRateMaster linGetBaudRateMaster   Function Syntax long linGetBaudRateMaster(long channel, ValueSelector selector); Description Gets the measured baudrate of the master node on a LIN channel in bits per second [bit/s]. The kind of value to be returned (average, ..."},"6397":{y:0,u:"../Content/Topics/SampConf/ISO11783/CANoe/GNSS/GNSSModels/gnssmodels_cn.htm",l:-1,t:"GNSS Models",i:4.1346435834165E-05,a:"Sample Configurations  »  ISO11783  » GNSS Models GNSS Models   With this sample configuration you can define a path which is replayed by a simulated GNSS receiver. You can use the three models Line, Rectangle and Meander to build this path. Introduction After measurement start the desktop ..."},"6398":{y:0,u:"../Content/Topics/CANoeCANalyzer/VTSystem/VT6000/VT6000RemoteDebugging.htm",l:-1,t:"Remote Debugging (VT6000/VT6011/VT6020/VT6051A/VT6060)",i:6.98142206533242E-05,a:"VT6000/VT6011/VT6020/VT6051A/VT6060  » Remote Debugging Remote Debugging   Overview When working with CANoe it may be advisable, for performance reasons, to execute the realtime portions on a separate, dedicated computer. You can do this using a standard computer or also a special realtime computer ..."},"6399":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionGetMeasurementIndex.htm",l:-1,t:"GetMeasurementIndex",i:1.98833408996632E-05,a:"CAPL Functions  »  General  »  Function Overview  » GetMeasurementIndex GetMeasurementIndex   Function Syntax long GetMeasurementIndex() Description Returns the current measurement index. The measurement index can be set in the global options and is incremented on each measurement start. Parameters ..."},"6400":{y:0,u:"../Content/Topics/CANoeCANalyzer/Car2x/procedures/c2xProceduresSecurity/c2xUseCertificates.htm",l:-1,t:"Handle Certificates (Car2x)",i:5.30737214484365E-05,a:"Car2x  »  Procedures  »  Use Certificates Use Certificates   Decode Certificates Certificates transmitted in the Security Header can be decoded automatically in CANoe. The procedure is described on the page  Use Security Header . Import/ Export Certificates Certificates not transmitted in messages ..."},"6401":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCGetServiceParameterSetData.htm",l:-1,t:"SCC_GetServiceParameterSetData",i:7.21696885227551E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Data Queries  »  EV Functions  » SCC_GetServiceParameterSetData SCC_GetServiceParameterSetData   Function Syntax void SCC_GetServiceParameterSetData ( long Index, \n\nlong\u0026 ParameterSetID, long\u0026 ParameterCount ) \n\n ..."},"6402":{y:0,u:"../Content/Topics/SampConf/MOST/CANoe/Tester/testerOverviewCn.htm",l:-1,t:"Tester (MOST)",i:4.80508941851455E-05,a:"Sample Configurations  »  MOST  » Tester (MOST) Tester (MOST)   This sample configuration contains a series of test modules which are intended to demonstrate the use of different test methods or test APIs. No MOST network interface is required for starting the simulation. The simulated devices are ..."},"6403":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/blocks/j1939filter/j1939filterNode/j1939FilterNodeInsert.htm",l:-1,t:"Node Filter Insert (J1939)",i:5.18677782832568E-05,a:"J1939  »  J1939 Filter  »  Node Filter  » Insert Insert Node Filter   You can insert a node filter via commands of the context menu or via commands of the menu Edit. The following commands are available: Add From Database…: opens a node selection dialog that you can use to insert nodes from a ..."},"6404":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/Trigger/TriggerUserDefinedBusstatisticSignal.htm",l:-1,t:"Bus Statistics Condition",i:1.91306081808397E-05,a:"Trigger Configuration  »  Set of User-defined Conditions  »   Bus Statistics Condition Bus Statistics Condition   Here you can edit the properties of a bus statistics condition. To create a new bus statistics condition you have to select one of the \n items within the  Symbol Selection  dialog. The ..."},"6405":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILOPOnAuxiliaryInput.htm",l:-1,t:"Iso11783IL_OPOnAuxiliaryInput",i:3.67775937289007E-05,a:"CAPL Functions  »  ISO11783   »  ISO11783 Interaction Layer   » Iso11783IL_OPOnAuxiliaryInput Iso11783IL_OPOnAuxiliaryInput (Callback)   Function Syntax void Iso11783IL_OPOnAuxiliaryInput( dword objectID, dword value1, dword value2 ); Description The function is called by the node layer, if an ..."},"6406":{y:0,u:"../Content/Topics/QuickStartGuide/04SettingUpTheBus/04SettingUpTheBus.htm",l:-1,t:"Set Up the Bus",i:8.26849954037218E-05,a:"Quick Start Guide  » Set Up the Bus Set Up the Bus   To start up CANoe use a test setup that is independent of existing CAN bus systems with only two network nodes. The two CAN controllers of your network interface can serve as the network nodes. As network interface you can use the two CAN ..."},"6407":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCGetFaultNotification.htm",l:-1,t:"SCC_GetFaultNotification",i:6.24395493115898E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Data Queries  »  Shared Functions  » SCC_GetFaultNotification SCC_GetFaultNotification   Function Syntax long SCC_GetFaultNotification ( char FaultCode[], char FaultMsg[] ) Description Gets the fault code and ..."},"6408":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionChkQueryEventSignalValue.htm",l:-1,t:"ChkQuery_EventSignalValue",i:9.31281217067364E-05,a:"CAPL Functions  »  Test Service Library  »  Status Report Functions  » ChkQuery_EventSignalValue ChkQuery_EventSignalValue   Function Syntax long ChkQuery_EventSignalValue (dword checkId, double pValue[]); // form 1 long ChkQuery_EventSignalValue (dword checkId, int64\u0026 value); // form 2 Method  ..."},"6409":{y:0,u:"../Content/Topics/SampConf/J1939/CANoe/Diagnostics/DTCMonitor/DTCMonitorCN.htm",l:-1,t:"DTC Monitor",i:6.39935810768477E-05,a:"Sample Configurations  »  J1939  » DTC Monitor DTC Monitor   Two ECUs that can send diagnostic messages are simulated. These can be displayed on the DTC monitor. Activating of Fault Conditions At the start of the measurement, the simulated nodes begin to send various messages. Two ECUs and their ..."},"6410":{y:0,u:"../Content/Topics/CAPLFunctions/ADFX/Functions/CAPLfunctionA664SetChecksum.htm",l:-1,t:"A664SetChecksum",i:4.11616532648487E-05,a:"CAPL Functions  »  AFDX »   A664SetChecksum A664SetChecksum   Function Syntax long A664SetChecksum (a664Frame aFrame, dword Rule) Description This function calculates and sets the checksum in the specified aFrame according to the defined checksum rule. Parameters Return Values Example — Availability"},"6411":{y:0,u:"../Content/Topics/CAPLFunctions/ADAS/Functions/CAPLfunctionTestWaitForADASGroundTruthObjectInLane.htm",l:-1,t:"TestWaitForADASGroundTruthObjectInLane",i:0.000147002534374008,a:"CAPL Functions  »  ADAS  » TestWaitForADASGroundTruthObjectInLane TestWaitForADASGroundTruthObjectInLane   Function Syntax long TestWaitForADASGroundTruthObjectInLane(int64 movingObjectId, int64 laneId, dword timeout); Description Waits for the first occurrence of a specified Moving Object which is ..."},"6412":{y:0,u:"../Content/Topics/CAPLFunctions/TCPIPAPI/Functions/CAPLfunctionTCPGetRemoteAddressAsString.htm",l:-1,t:"TCPGetRemoteAddressAsString",i:4.47117629458147E-05,a:"CAPL Functions  »  TCP/IP API  » TCPGetRemoteAddressAsString TCPGetRemoteAddressAsString   Function Syntax long TcpGetRemoteAddressAsString(dword socket, char buffer[], dword size); Description This function retrieves the remote address of the specified connected socket in Internet standard ..."},"6413":{y:0,u:"../Content/Topics/CANoeCANalyzer/SCOPE/ScopeSignalComparison.htm",l:-1,t:"Signal Comparison (Scope)",i:9.07017648305419E-05,a:"Scope  »  Analysis  » Signal Comparison Signal Comparison   The  diagram  lets you make the following comparisons: Different time segments within the same dataset Select the desired signals from a dataset on the  Measurements (Scope) page and activate comparison mode ( toolbar :  ). This divides the ..."},"6414":{y:0,u:"../Content/Topics/CAPLFunctions/IP/SOMEIPIL/Functions/CAPLfunctionSomeIpSetRequestId.htm",l:-1,t:"SomeIpSetRequestId",i:1.96047729647541E-05,a:"CAPL Functions  »  Ethernet  »  SOME/IP IL  » SomeIpSetRequestId SomeIpSetRequestId   Function Syntax LONG SomeIpSetRequestId ( dword messageHandle, dword requestId); Description This function sets the request ID in the SOME/IP message header. Parameters Return Values Example Availability"},"6415":{y:0,u:"../Content/Topics/CANoeCANalyzer/ISO11783/InteractiveTaskController/ITCSettingsTaskfileMatrix.htm",l:-1,t:"Settings Matrix Task File",i:4.83816770185569E-05,a:"ISO11783  »  Interactive Task Controller  »  Configuration  » Task File Settings Matrix Task File  "},"6416":{y:0,u:"../Content/Topics/TestCommands/CheckDescriptions/CDMOSTNetStateObservation.htm",l:-1,t:"MOST NetState Observation (Check Description)",i:5.71957705098368E-05,a:" CANoe  »  Check Descriptions  »  MOST-Specific Checks  » MOST NetState Observation MOST NetState Observation   MOST Light \u0026 Lock Observation (Check Description) MOST Test Concept  "},"6417":{y:0,u:"../Content/Topics/CANoeCANalyzer/CANopen/Nodelayer/NetworkManagementOverview.htm",l:-1,t:"Network Management",i:3.74161837577972E-05,a:"CANopen  »  CANopen Node Layer  » Network Management Network Management (deprecated)   These functions can only be executed for a node that is also NMT master. \n For the functions defined here, the  object 1F82  (RequestNMT) \n must exist in the object dictionary. The state of any other node on the \n ..."},"6418":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/j1939basics/defineJ1939Signal.htm",l:-1,t:"Define a J1939 Signal",i:0.000225107572339847,a:"CANoe  »  J1939  »  Define a J1939 Database  » Define a J1939 Signal Define a J1939 Signal   For  J1939  signal values are only valid within a defined value range. Particular values are reserved and identify an invalid or not available signal. For J1939 signals, there are two additional signal ..."},"6419":{y:0,u:"../Content/Topics/CANoeCANalyzer/Test/TestUnits/TUExecution.htm",l:-1,t:"Executing Test Units",i:5.04421390638533E-05,a:"Test  »  Test Units  » Executing Test Units Executing Test Units Context Menu of the test configuration : Execute Test Units Test configurations with one or more test units can be started interactively or with an automated start: For automated execution, the following start options are appropriate ..."},"6420":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILOPChangePriority.htm",l:-1,t:"Iso11783IL_OPChangePriority",i:3.69260011880801E-05,a:"CAPL Functions  »  ISO11783   »  ISO11783 Interaction Layer   » Iso11783IL_OPChangePriority Iso11783IL_OPChangePriority   Function Syntax long Iso11783IL_OPChangePriority( dword \n maskID, dword priority ); // form 1 long Iso11783IL_OPChangePriority( dbNode implement, dword \n maskID, dword priority ..."},"6421":{y:0,u:"../Content/Topics/CAPLFunctions/TCPIPAPI/Functions/CAPLfunctionIPSetSocketOption.htm",l:-1,t:"IpSetSocketOption",i:5.03125554909083E-05,a:"CAPL Functions  »  TCP/IP API  » IpSetSocketOption IpSetSocketOption   Function Syntax long IpSetSocketOption( dword socket, long level, long name, long value); // form 1 long IpSetSocketOption( dword socket, char level[], char name[], long value); // form 2 Method  Syntax socket.SetSocketOption( ..."},"6422":{y:0,u:"../Content/Topics/CANoeCANalyzer/SCOPE/ScopeConfigurationDevices.htm",l:-1,t:"Devices (Scope)",i:5.70667869692664E-05,a:"Scope  »  Configuration  » Devices Devices Diagram |Context Menu|Configuration Device List The device list contains the assignment of device names (e.g. Scope_0), device types and the serial numbers. The serial number is only shown during an established connection. When  configuring several Scopes , ..."},"6423":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclRemoveConsumer.htm",l:-1,t:"cclRemoveConsumer",i:3.86360090043396E-05,a:" CANoe  »  C Library API  »  Functions  » cclRemoveConsumer cclRemoveConsumer   Function Syntax int32_t cclRemoveConsumer(cclServiceID serviceID, cclConsumerID consumerID); Description Removes a dynamically added consumer side endpoint from a service. Parameters Return Values Example Availability ..."},"6424":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939InteractionLayer/Functions/CAPLfunctionJ1939ILSetLampStatus.htm",l:-1,t:"J1939ILSetLampStatus",i:2.01909972472997E-05,a:"CAPL Functions  »  J1939  »  J1939 IL  » J1939ILSetLampStatus J1939ILSetLampStatus   Function Syntax long J1939ILSetLampStatus(dword pgn, word lampStatus); // form 1 long J1939ILSetLampStatus(dbNode node, dword pgn, word lampStatus); // form 2 Description This function sets the lamp status of a ..."},"6425":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/CANopenBasic/Functions/CAPLfunctionsCANopenDownloadDomainFromFile.htm",l:-1,t:"CANopenDownloadDomainFromFile",i:5.65358836676032E-05,a:"CAPL Functions  »  CANopen  »  Basic Functions  » CANopenDownloadDomainFromFile CANopenDownloadDomainFromFile   Function Syntax void CANopenDownloadDomainFromFile(dword nodeID, dword index, dword subIndex, char[] domainDataFile, dword blockMode, dword[] errCode); // form 1 void ..."},"6426":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/Functions/CAPLfunctionMOSTGetSBC.htm",l:-1,t:"mostGetSBC",i:5.90687050885098E-05,a:"CAPL Functions  »  MOST  » mostGetSBC mostGetSBC   Function Syntax long mostGetSBC (long channel); Description This function returns the \"Synchronous Bandwidth Control (SBC) \n Register\" value of the MOST hardware chip connected to the channel. Parameters Return Values Example — Availability ..."},"6427":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerFS/Functions/CAPLfunctionIso11783FSILOnError.htm",l:-1,t:"FSIL_OnError",i:0.000289417698509248,a:"CAPL Functions  »  ISO11783  »  File Server Interaction Layer (FS IL)   » FSIL_OnError FSIL_OnError (Callback)   Function Syntax void FSIL_OnError( long errorCode, long param ); Description Is called if an error has occurred. Parameters Return Values — Example Availability  "},"6428":{y:0,u:"../Content/Topics/Externals/DiagConsole/DDDID_DIAG.htm",l:-1,t:"Remarks About Dynamically Defined Data IDs",i:1.91306081808397E-05,a:"Diagnostic Console  » Remarks about Dynamically Defined Identifier   This means the dynamically arrangement of several parameters resulting in one record that is assigned to one request. If supported by the ECU this procedure allows a periodically scan of several parameters without the necessity to ..."},"6429":{y:0,u:"../Content/Topics/CAPLFunctions/Diagnostics/Functions/CAPLfunctionDoIPAddLocalIPaddress.htm",l:-1,t:"DoIP_AddLocalIPaddress",i:7.2755294435826E-05,a:"CAPL Functions  »  Diagnostics  » DoIP_AddLocalIPaddress DoIP_AddLocalIPaddress   Function Syntax long DoIP_AddLocalIPaddress(char ipAddress[]) Description Adds another IP address this vehicle simulation can be reached under. Parameters Return Values Example Availability DoIP_RemoveLocalIPaddress"},"6430":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/Graphics/GraphicsLegendShortcutMenu.htm",l:-1,t:"Graphics Window: Context Menu of the Legend",i:0.000154159561050906,a:"Graphics Window  »  Legend  » Context Menu Graphics Window: Context Menu of the Legend   Add Application Layer Objects... Add Signals... Add MOST Signals... Add Variables... Add Diagnostic Parameter... User-Defined Signals Change Value… Opens the  Symbol Panel  or the  Application Panel  depending ..."},"6431":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/Trace/Columns/TraceColumnsKLine.htm",l:-1,t:"Columns for K-Line",i:1.91306081808397E-05,a:" CANoe  » … »  Trace Window  »  Configuration  »  Column Configuration  » K-Line Columns for K-Line Context Menu Path :  Configuration | Column Configuration |K-Line Sample Configurations and Applications   •  "},"6432":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionStmCreateRampDatabase.htm",l:-1,t:"StmCreate_Ramp (limits taken from database)",i:6.25110495860924E-05,a:"CAPL Functions  »  Test Service Library  »  Stimulus Functions  » StmCreate_Ramp (limits taken from database) StmCreate_Ramp (limits taken from database)   Function Syntax To stimulate signals: dword StmCreate_Ramp(message aMessage, dbsignal aDBSignal, dword CycleTime, dword TimeUp, dword TimeHigh, ..."},"6433":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939InteractionLayer/Functions/CAPLfunctionJ1939ILSetSignalRaw.htm",l:-1,t:"J1939ILSetSignalRaw",i:3.68301478024517E-05,a:"CAPL Functions  »  J1939  »  J1939 IL  » J1939ILSetSignalRaw J1939ILSetSignalRaw   Function Syntax long J1939ILSetSignalRaw(dbSignal signal, long value ); // form 1 long J1939ILSetSignalRaw(dbNode node, dbSignal signal, long value ); // form 2 Description Sets the signal to the specified raw value. ..."},"6434":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINtpSetMaximumReceiveLength.htm",l:-1,t:"LINtp_SetMaximumReceiveLength",i:3.89520431734087E-05,a:"CAPL Functions  »  LIN  » LINtp_SetMaximumReceiveLength LINtp_SetMaximumReceiveLength   Function Syntax void LINtp_SetMaximumReceiveLength(dword maxRecLen); Description Sets maximum number of bytes node can receive. If more data is indicated in a FirstFrame and FlowControl frames have been ..."},"6435":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectFilter.htm",l:-1,t:"Filter (COM Object)",i:4.7042446477678E-05,a:" CANoe  »  COM Interface  »  Objects  » Filter Filter Application  »  Configuration  »  MeasurementSetup  »  LoggingCollection  »  Logging  »  Exporter  » Filter Description The Filter object represents a Pass Filter for messages and signals in usage with an exporter. Properties Methods Events — ..."},"6436":{y:0,u:"../Content/Topics/CANoeCANalyzer/VisualSequencer/VSCommands/VSCommandRepeatEnd.htm",l:-1,t:"Repeat End (Visual Sequencer Command)",i:2.32619207429654E-05,a:"Visual Sequencer  »  Commands  » Repeat End Repeat End   Description Specifies the end of a loop. Objects — Operators — Operands — Example Availability  "},"6437":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectOfflineTargets.htm",l:-1,t:"OfflineTargets (COM Object)",i:3.63413553253149E-05,a:" CANoe  »  COM Interface  »  Objects  » OfflineTargets OfflineTargets Application  »  Configuration  »  MeasurementSetup  »  OfflineGroup  »  OfflineSourceExes  »  OfflineSourceEx  » TimeSettings Description A collection of targets of an offline source. All elements in the collection implement the ..."},"6438":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/NodeLayerTFS/Functions/CAPLfunctionCoTfsOdChkStdEntries.htm",l:-1,t:"coTfsODChkStdEntries",i:5.03740665666102E-05,a:"CAPL Functions  »  CANopen  »  Test Feature Set Node Layer  » coTfsODChkStdEntries coTfsODChkStdEntries(Level 3)   Function Syntax long coTfsODChkStdEntries( void ); Description The function executes a  standard test  of the object dictionary. For a description of the object check, see  ..."},"6439":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestValidateImplValueInRangeSInt.htm",l:-1,t:"TestValidateImplValueInRangeSInt",i:0.000100212140489065,a:"CAPL Functions  »  Test Feature Set  » TestValidateImplValueInRangeSInt TestValidateImplValueInRangeSInt   Function Syntax long TestValidateImplValueInRangeSInt(char aTestStep[], valueHandle * value, int64 aLowLimit, int64 aHighLimit); Description Checks the impl encoding of a valueHandle value ..."},"6440":{y:0,u:"../Content/Topics/CANoeCANalyzer/Ribbon/File/Options/WindowsBlocks/WindowsBlocksSymbolSelection.htm",l:-1,t:"Configuration: Symbol Selection",i:8.51800897244097E-05,a:"Options  » Windows/Blocks \n » Symbol Selection Configuration: Symbol Selection Ribbon :  File Tab | Options |Windows/Blocks|Symbol Selection Configuration of the Symbol Selection in Tables In various dialogs and windows you can select symbols via a selection list within a table cell. For array ..."},"6441":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerVT/Functions/CAPLfunctionIso11783VTILTouch.htm",l:-1,t:"VTIL_Touch, VTIL_PointingEventMsg",i:4.89214897086971E-05,a:"CAPL Functions  »  ISO11783  »  Virtual Terminal Interaction Layer (VT IL)   » VTIL_Touch, VTIL_PointingEventMsg VTIL_Touch, VTIL_PointingEventMsg   Function Syntax long VTIL_Touch(dword x, dword y, dword duration); // form 1 long VTIL_Touch(dbNode vt, dword x, dword y, dword duration); // form 2 ..."},"6442":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/Functions/CAPLfunctionMOSTAllocTableGetCL.htm",l:-1,t:"mostAllocTableGetCL",i:6.42098159903132E-05,a:"CAPL Functions  »  MOST  » mostAllocTableGetCL mostAllocTableGetCL   Function Syntax long mostAllocTableGetCL(long channel, long idx); Description Returns the connection label of the respective entry in the allocation table. Parameters Return Values Example — Availability  "},"6443":{y:0,u:"../Content/Topics/CAPLFunctions/Car2x/Functions/CAPLfunctionC2xSetStationOnRoute.htm",l:-1,t:"C2xSetStationOnRoute",i:4.83323854682765E-05,a:"CAPL Functions  »  Car2x  » C2xSetStationOnRoute C2xSetStationOnRoute   Function Syntax long C2xSetStationOnRoute(char* stationName, char* targetRouteName*) Description If the current scenario is running, it must be stopped via  C2xStopScenario()  function call or by stopping scenario in Scenario ..."},"6444":{y:0,u:"../Content/Topics/CAPLFunctions/TLSAPI/Functions/CAPLfunctiontlsOpen.htm",l:-1,t:"tlsOpen",i:6.51577233293052E-05,a:"CAPL Functions  »  TLS API  » tlsOpen tlsOpen   Function Syntax dword tlsOpen(dword socket); Description Opens a TLS socket. An existing socket handle is used to create a new TLS connection. Parameters Return Values Example Availability  "},});