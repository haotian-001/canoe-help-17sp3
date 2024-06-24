define({"754":{y:0,u:"../Content/Topics/CAPLFunctions/A429/Functions/CAPLfunctionA429SetScheduleTx.htm",l:-1,t:"a429SetScheduleTx",i:5.67241859111609E-05,a:"CAPL Functions  »  A429  » a429SetScheduleTx a429SetScheduleTx   Function Syntax dword a429SetScheduleTx( a429word myA429word, dword myCycle ); Description Prepare an ARINC word to be transmitted cyclically by means of the hardware scheduling support. Calling this function modifies the  selectors ..."},"755":{y:0,u:"../Content/Topics/CAPLFunctions/GPIB/Functions/CAPLfunctionGPIBWriteStr.htm",l:-1,t:"GPIBWriteStr",i:6.78080008486186E-05,a:"CAPL Functions  »  GPIB  » GPIBWriteStr GPIBWriteStr   Function Syntax long GPIBWriteStr \n (long deviceDescriptor, char cmdStr[]); Description Writes cmdStr to the device. The function returns immediately and does not wait for the end of the command transmission. Parameters Return Values Example ..."},"756":{y:0,u:"../Content/Topics/CAPLFunctions/Sensor/Functions/CAPLfunctionSensorQueueMosiData.htm",l:-1,t:"sensorQueueMosiData",i:6.09821536172007E-05,a:"CAPL Functions  »  Sensor  » sensorQueueMosiData sensorQueueMosiData   Function Syntax SensorErrorCode sensorQueueMosiData(char[] sysVarNamespace, byte buffer[], dword bitCount); // from 1 SensorErrorCode sensorQueueMosiData(char[] sysVarNamespace, byte buffer[], dword bitCount, dword delayNs); // ..."},"757":{y:0,u:"../Content/Topics/CAPLFunctions/Security/Functions/CAPLfunctionPkcs10SigningRequest_GetExtensionRequest.htm",l:-1,t:"Pkcs10SigningRequest_GetExtensionRequest",i:6.41810845781887E-05,a:"CAPL Functions  »  Security  » Pkcs10SigningRequest_GetExtensionRequest Pkcs10SigningRequest_GetExtensionRequest   Method  Syntax dword Pkcs10SigningRequest_GetExtensionRequest(qword objectHandle, qword\u0026 outHandleExtensions) Description Getter function for the Extension Request field of the PKCS#10 ..."},"758":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/Filter/FlexRayFilterTypes.htm",l:-1,t:"FlexRay Filter Types",i:3.60889297366588E-05,a:"FlexRay Filter  » Filter Types FlexRay Filter Types   Frame Filter There are two types of frame filters: Frame Filter uses frames from a database or frames defined via Absolutely Scheduled Timing Slot Range Filter uses frames that are defined via a specified slot range, base cycle and cycle ..."},"759":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/Map/MapWindowGNSSConfiguration.htm",l:-1,t:"GNSS Configuration",i:7.78858483358835E-05,a:"Map Window  » Configuration of GNSS Receiver GNSS Configuration Ribbon :  Hardware Tab |GNSS Configuration This dialog allows you the configuration of GNSS receivers for usage in CANoe. The received data will be available as system variables in CANoe. You can visualize this data directly in the  Map ..."},"760":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISONodeLayer/Functions/CAPLfunctionIso11783PDDsetdistance.htm",l:-1,t:"Iso11783PDDSetDistance",i:4.89887579938959E-05,a:"CAPL Functions  »  ISO11783  »  ISO11783 Node Layer  » Iso11783PDDSetDistance Iso11783PDDSetDistance   Function Syntax long Iso11783PDDSetDistance( dword ecuHandle, dword \n distance ); Description The distance covered is set with this function. The value is needed \n for the distance trigger and ..."},"761":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCGetSalesTariffEntryData.htm",l:-1,t:"SCC_GetSalesTariffEntryData",i:6.24395493115898E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Data Queries  »  EV Functions  » SCC_GetSalesTariffEntryData SCC_GetSalesTariffEntryData   Function Syntax void SCC_GetSalesTariffEntryData ( \nlong i1, long i2, long\u0026 Start, long\u0026 Duration, \nlong\u0026 EPriceLevel, ..."},"762":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILtimSetServerStatus.htm",l:-1,t:"Iso11783IL_TIMSetServerStatus",i:4.69137928415316E-05,a:"CAPL Functions  »  ISO11783   »  ISO11783 Interaction Layer   » Iso11783IL_TIMSetServerStatus Iso11783IL_TIMSetServerStatus   Function Syntax long Iso11783IL_TIMSetServerStatus(dword cycleTime); // form 1 long Iso11783IL_TIMSetServerStatus(dword cycleTime, pg TIM12 pgWithNewContent); // form 2 long ..."},"763":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISONodeLayer/Functions/CAPLfunctionIso11783TxReqPG.htm",l:-1,t:"Iso11783TxReqPG",i:5.93989237193289E-05,a:"CAPL Functions  »  ISO11783  »  ISO11783 Node Layer   » Iso11783TxReqPG Iso11783TxReqPG   Function Syntax dword \n Iso11783TxReqPG( dword ecuHandle, dword pgn, dword destination, dword \n priority, dword dlc, char data[] ); dword \n Iso11783TxReqPG( dword ecuHandle, dword pgn, dword destination, dword ..."},"764":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCGetMessageRxTime.htm",l:-1,t:"SCC_GetMessageRxTime",i:6.24395493115898E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Data Queries  »  Shared Functions  » SCC_GetMessageRxTime SCC_GetMessageRxTime   Function Syntax qword SCC_GetMessageRxTime ( ) // form 1 void SCC_GetMessageRxTime ( dword\u0026 TimeNsHigh, dword\u0026 TimeNsLow ) // form ..."},"765":{y:0,u:"../Content/Topics/CAPLFunctions/CANoeIL/Functions/CAPLfunctionILSetCANFDParam.htm",l:-1,t:"ILSetCANFDParam",i:5.0790874216857E-05,a:"CAPL Functions  »  CANoe IL  » ILSetCANFDParam ILSetCANFDParam   Function Syntax long ILSetCANFDParam(dword ID, int FDF, int BRS, int DLC) long ILSetCANFDParam(dbMsg msg, int FDF, int BRS, int DLC) Description The function allows setting of CAN FD parameters for a specific message. Parameters ..."},"766":{y:0,u:"../Content/Topics/Shared/CAPL/General/SymbolicIdentifiers.htm",l:-1,t:"Working with Symbolic Identifiers",i:0.000210837160024427,a:"CAPL Introduction  » Working with Symbolic Identifiers Working with Symbolic Identifiers   In addition to symbolic names for messages, signals and environment variables, you can also use symbolic names for signal and integer environment variable values. To do this, you would assign symbolic names to ..."},"767":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionReplayState.htm",l:-1,t:"ReplayState",i:1.96035070035483E-05,a:"CAPL Functions  »  General  »  Function Overview  » ReplayState ReplayState   Function Syntax dword ReplayState (char pName[]); Description Returns the state of the Replay Block with the name pName. Parameters Return Values Example See  ReplayState Availability  "},"768":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionHILAPIPauseSignalGenerator.htm",l:-1,t:"HILAPIPauseSignalGenerator",i:4.78014703111414E-05,a:"CAPL Functions  »  Test Service Library  »  Stimulus Functions  » HILAPIPauseSignalGenerator HILAPIPauseSignalGenerator   Function Syntax dword HILAPIPauseSignalGenerator(dword handle); Description Pauses a Signal Generator. Parameters Return Values Example Availability  "},"769":{y:0,u:"../Content/Topics/CAPLFunctions/TCPIPAPI/Functions/CAPLfunctionIPGetAdapterAddress.htm",l:-1,t:"IpGetAdapterAddress",i:4.80443602885305E-05,a:"CAPL Functions  »  TCP/IP API  » IpGetAdapterAddress IpGetAdapterAddress   Function Syntax long IpGetAdapterAddress( dword ifIndex, dword ipv4address[],dword ipv4AddressSize); // form 1 long IpGetAdapterAddress( dword ifIndex, byte ipv6Addresses[][], dword ipv6AddressesSize); // form 2 long ..."},"770":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/GNSSNodeLayer/CAPLfunctionsGNSSNLOverview.htm",l:-1,t:"GNSS Node Layer",i:6.47413228065921E-05,a:"CAPL Functions  »  1939  » GNSS Node Layer GNSS Node Layer   ON THIS PAGE: Events  [▲ back] Node Control  [▲ back] Other Functions  [▲ back] Settings  [▲ back] Simulation  [▲ back] Waypoints  [▲ back] Error Codes GNSSAppErrorIndication   •   Error Codes GNSSGetLastError"},"771":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/j1939basics/j1939Basics.htm",l:-1,t:"J1939 Protocol",i:0.00169059197029834,a:"CANoe  »  J1939  » J1939 for CANoe/CANalyzer » J1939 Protocol J1939 for CANoe/CANalyzer | The J1939 Protocol J1939 is a CAN-based layer 7 protocol that has its origin in the diesel control of commercial vehicles. Among the typical properties of J1939 are: based on  29-bit CAN identifier ..."},"772":{y:0,u:"../Content/Topics/CAPLFunctions/Scope/Classes/CAPLfunctionScopeFieldLengthData.htm",l:-1,t:"Class: scopeFieldLengthData",i:8.65304360993127E-05,a:"CAPL Functions  »  Scope  » Class: scopeFieldLengthData Class: scopeFieldLengthData   This structure contains the common bit information for the field the bit is contained, the bit number within the field the length of the bit the absolute bit time in [ns] the sample point voltage the bit level. ..."},"773":{y:0,u:"../Content/Topics/CAPLFunctions/TCPIPAPI/Functions/CAPLfunctionIPRouteAddInterface.htm",l:-1,t:" IPRouteAddInterface",i:5.73801623544744E-05,a:"CAPL Functions  »  TCP/IP API  »  IPRouteAddInterface  IPRouteAddInterface   Function Syntax long IPRouteAddInterface( dword destination, dword mask, dword ifIndex); // form 1 long IPRouteAddInterface( byte destination[], dword prefix, dword ifIndex); // form 2 long IPRouteAddInterface(IP_Address ..."},"774":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/NodeLayerTFS/Functions/CAPLfunctionCoTfsArrToQ.htm",l:-1,t:"coTfsArrToQ",i:3.5857770891039E-05,a:"CAPL Functions  »  CANopen  »  Test Feature Set Node Layer  » coTfsArrToQ coTfsArrToQ   Function Syntax qword coTfsArrToQ( byte inByteArray[], dword arraysize ); Description The function converts the content of a byte array into a qword value. Parameters Return Values Converted value or 0 if ..."},"775":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestValidateSignalOutsideRange.htm",l:-1,t:"testValidateSignalOutsideRange",i:6.86027891556078E-05,a:"CAPL Functions  »  Test Feature Set  /  Signal Access  » testValidateSignalOutsideRange testValidateSignalOutsideRange   Function Syntax long testValidateSignalOutsideRange (char aTestStep[], Signal aSignal, float aLowLimit, float aHighLimit); // form 1 long testValidateSignalOutsideRange (char ..."},"776":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectBusStatistics.htm",l:-1,t:"BusStatistics (COM Object)",i:4.8873786609529E-05,a:" CANoe  »  COM Interface  »  Objects  » BusStatistics BusStatistics Application  »  Configuration  »  MeasurementSetup  » BusStatistics Description The BusStatistics object represents the bus statistics of the CANoe application. Properties Methods — Events — Example Availability COM Object Hierarchy"},"777":{y:0,u:"../Content/Topics/CANoeCANalyzer/LibrariesPackages/VectorILCAN/VectorILCANRelDBCTimingAttributes.htm",l:-1,t:"Relation of the DBC Timing Settings",i:4.41173026062196E-05,a:" CANoe  »  Libraries \u0026 Add-ons  »  CANoe IL CAN  » Relation of the DBC Timing Settings Relation of the DBC Timing Settings   The following table gives an overview of the timing types and the DBC attribute relations for a certain timing. The timing is basically defined at the message. All other ..."},"778":{y:0,u:"../Content/Topics/CAPLFunctions/Sensor/Functions/CAPLfunctionQueueSpcTriggerPulse.htm",l:-1,t:"QueueSpcTriggerPulse",i:6.09821536172007E-05,a:"CAPL Functions  »  Sensor  » QueueSpcTriggerPulse QueueSpcTriggerPulse   Method  Syntax SensorErrorCode sysvarSensorNamespace.QueueSpcTriggerPulse(dword triggerLengthNs, dword responseSpaceLengthNs, dword periodic); Description Queues a single SPC trigger pulse on the specified ECU channel. ..."},"779":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCGetPeakCurrentRipple.htm",l:-1,t:"SCC_GetPeakCurrentRipple",i:6.65221240921723E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Data Queries  »  EV Functions  » SCC_GetPeakCurrentRipple SCC_GetPeakCurrentRipple   Function Syntax  float SCC_GetPeakCurrentRipple ( ) Description Gets the value of PeakCurrentRipple of a ..."},"780":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectApplication.htm",l:-1,t:"Application (COM Object)",i:0.00300695850685088,a:" CANoe  »  COM Interface  »  Objects  » Application Application Application Description The Application object represents the CANoe application. The Application object is the foundation for the  object hierarchy . You can reach all other objects from the Application object. Properties Methods Events ..."},"781":{y:0,u:"../Content/Topics/CANoeCANalyzer/LibrariesPackages/AddOnDLLsAssigning.htm",l:-1,t:"Assigning Modeling Libraries",i:0.000285239660356077,a:" CANoe  »  Libraries \u0026 Add-ons  » Assigning Modeling Libraries Assigning Modeling Libraries   Introduction The following describes how modeling libraries (interaction layer, transport protocol, network management, and customer-specific expansions) and test modules are integrated into a CANoe ..."},"782":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerTC/Functions/CAPLfunctionIso11783TCILSetTCStatus.htm",l:-1,t:"TCIL_SetTCStatus",i:6.41846817713954E-05,a:"CAPL Functions  »  ISO11783  »  Task Controller Interaction Layer (TC IL)   » TCIL_SetTCStatus TCIL_SetTCStatus   Function Syntax long TCIL_SetTCStatus(dword cycleTime); // form 1 long TCIL_SetTCStatus(dword cycleTime, pg PD); // form 2 long TCIL_SetTCStatus(dbNode tc, dword cycleTime); // form 3 ..."},"783":{y:0,u:"../Content/Topics/CANoeCANalyzer/AMDXCP/ISystemDebugger.htm",l:-1,t:"iSYSTEM Debugger",i:5.17051793758636E-05,a:"Option AMD/XCP  » iSYSTEM Debugger iSYSTEM Debugger   Option AMD/XCP can use a hardware debugger from iSYSTEM to access an ECU. For this you have to activate the XCP plugin in the winIDEA software (winIDEA 2012, version 9.12.78 or newer). CANoe can control the debugger by using a local XCPonTCP ..."},"784":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/blocks/j1939scanner/tabs/systems.htm",l:-1,t:"Systems",i:8.1307474997924E-05,a:"J1939  »  J1939 Scanner  » Pages » Systems Systems   This view shows the nodes hierarchical, ordered by channel, industry group, and system. Next to the channel the number of active nodes are displayed, nodes without address are not considered. The names of the nodes are formed as follows: If a node ..."},"785":{y:0,u:"../Content/Topics/CAPLFunctions/VTSystem/Functions/CAPLfunctionVTSSetRefVoltageMode.htm",l:-1,t:"SetRefVoltageMode",i:6.56148503936579E-05,a:"CAPL Functions  »  VT System  » SetRefVoltageMode SetRefVoltageMode   Method  Syntax long SysVarNamespace.SetRefVoltageMode (eVTSRefVoltageMode Mode); // form 1 long SysVarNamespace.SetRefVoltageMode (eVTSRefVoltageMode Mode, double Factor); // form 2 Description Sets the mode for the reference ..."},"786":{y:0,u:"../Content/Topics/CANoeCANalyzer/VTSystem/VTSystemStandaloneMode.htm",l:-1,t:"Standalone Mode (VT System)",i:6.83206181647122E-05,a:"VT System  » Standalone Mode Standalone Mode   Effective with  CANoe 8.2 SP2 you can use VT System also in CANoe\u0027s  standalone mode . For the most part the needed files are automatically taken for the standalone configuration, as long as the VT System integration is already activated at that time ..."},"787":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCCreateCMAmpMapCnf.htm",l:-1,t:"SCC_CreateCM_Amp_Map_Cnf",i:6.24395493115898E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  SLAC Test Functions  »  Shared Functions  » SCC_CreateCM_Amp_Map_Cnf SCC_CreateCM_Amp_Map_Cnf   Function Syntax void SCC_CreateCM_Amp_Map_Cnf ( byte SourceMac[], byte TargetMac[], dword ResType ) Description Creates ..."},"788":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionGraphicsWindowTimeInterval.htm",l:-1,t:"graphicsWindowTimeInterval",i:1.96035070035483E-05,a:"CAPL Functions  »  General  »  Function Overview  » graphicsWindowTimeInterval graphicsWindowTimeInterval   Function Syntax void graphicsWindowTimeInterval(char[] windowName, int64 from, int64 to); Description Sets the time interval that will be displayed in a CANoe Graphics Window . Parameters ..."},"789":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCGetMessageBodyIdAttr.htm",l:-1,t:"SCC_GetMessageBodyIdAttr",i:6.24395493115898E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Simulation Data  »  EVSE Functions  » SCC_GetMessageBodyIdAttr SCC_GetMessageBodyIdAttr   Function Syntax void SCC_GetMessageBodyIdAttr ( char Id[] ) Description Gets the Id attribute of the message body. ..."},"790":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectXCPSetup.htm",l:-1,t:"XCPSetup (COM Object)",i:0.000116273726949843,a:" CANoe  »  COM Interface  »  Objects  » XCPSetup XCPSetup Application  »  Configuration  »  GeneralSetup  » XCPSetup Description The XCPSetup object represents the XCP settings of the CANoe application. Properties Methods — Events — Example Availability COM Object Hierarchy   •   CCPSetup (COM ..."},"791":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerVT/Functions/CAPLfunctionIso11783VTILOnChangedState.htm",l:-1,t:"VTIL_OnChangedState",i:5.57719992083912E-05,a:"CAPL Functions  »  ISO11783  »  Virtual Terminal Interaction Layer (VT IL)   » VTIL_OnChangedState VTIL_OnChangedState (Callback)   Function Syntax void VTIL_OnChangedState( long state ); Description This callback function is called from the VT IL if it has changed its state. Parameters ..."},"792":{y:0,u:"../Content/Topics/SampConf/Sensor/SPI/SPIBasic.htm",l:-1,t:"SPI Basic (Sensor)",i:4.08415854227062E-05,a:"Sample Configurations  »  Sensor  » SPI Basic (Sensor) SPI Basic (Sensor)   Introduction To use this sample configuration a VT System with a VT2710 module is required. The two SPI channels of the VT2710 simulate the SPI master and the SPI slave. Thus the four SPI lines (MOSI, MISO, SCK, and CS) of ..."},"793":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestGetCurrentCycle.htm",l:-1,t:"testGetCurrentCycle",i:4.34249207829591E-05,a:"CAPL Functions  »  Test Feature Set  » testGetCurrentCycle testGetCurrentCycle   Function Syntax long testGetCurrentCycle (); Description Returns the current cycle of the test. Parameters — Return Values Example — Availability  "},"794":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestValidateImplValueOutsideRangeSInt.htm",l:-1,t:"TestValidateImplValueOutsideRangeSInt",i:0.000100212140489065,a:"CAPL Functions  »  Test Feature Set  » TestValidateImplValueOutsideRangeSInt TestValidateImplValueOutsideRangeSInt   Function Syntax long TestValidateImplValueOutsideRangeSInt(char aTestStep[], valueHandle * value, int64 aLowLimit, int64 aHighLimit); Description Checks the impl encoding of a ..."},"795":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/LINInteractiveScheduler/LINiscConfiguration.htm",l:-1,t:"Configuration (LIN ISC)",i:2.56316914731031E-05,a:"Simulation Setup  »  Windows and User Interfaces  »  LIN ISC  » Configuration Configuration   Toolbar View:  Network Represent the  network configuration  in the form of a tree  and offers functions for controlling the LIN scheduler and the state  of the assigned network . View: Schedule Tables ..."},"796":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectTestConfigurationSettings.htm",l:-1,t:"TestConfigurationSettings (COM Object)",i:4.2954298143136E-05,a:" CANoe  »  COM Interface  »  Objects  » TestConfigurationSettings TestConfigurationSettings Application  »  Configuration  »  TestConfigurations  »  TestConfiguration  » TestConfigurationSettings Description The TestConfigurationSettings object represents the settings of a test configuration. ..."},"797":{y:0,u:"../Content/Topics/CAPLFunctions/A429/Functions/CAPLfunctionA429SetConfiguration.htm",l:-1,t:"a429SetConfiguration",i:7.50236985281272E-05,a:"CAPL Functions  »  A429  » a429SetConfiguration a429SetConfiguration   Function Syntax long a429SetConfiguration( long channel, a429settings mySettings ); Description This function sets the actual channel configuration. Internally the function  a429ResetEx  is called to apply the changes Parameters ..."},"798":{y:0,u:"../Content/Topics/CAPLFunctions/Diagnostics/CAPLfunctionsDiagnosticsErrorCode.htm",l:-1,t:"Return Values (Diagnostics)",i:0.0022674371138335,a:"CAPL Functions  »  Diagnostics  » Error Codes Return Values   The following values can be returned:  "},"799":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/GNSSNodeLayer/Functions/CAPLfunctionGNSSaddwpref.htm",l:-1,t:"GNSSAddWpRef",i:2.70739949303737E-05,a:"CAPL Functions  »  J1939  »  GNSS NL  » GNSSAddWpRef GNSSAddWpRef   Function Syntax dword GNSSAddWpRef( double latLength, double lonLength, \ndouble altLength ) Description This function inserts a new waypoint at the end of the waypoint list. \n The new point is derived by adding the path differences ..."},"800":{y:0,u:"../Content/Topics/CAPLFunctions/VTSystem/Functions/CAPLfunctionVTSvtsSetOutputMask.htm",l:-1,t:"vtsSetOutputMask",i:8.94759936479889E-05,a:"CAPL Functions  »  VT System  » vtsSetOutputMask vtsSetOutputMask   Function Syntax long vtsSetOutputMask (DWORD RowMask); Description Activates the requested rows of a switch matrix module for dynamic stimulation (PWM, Bitstreams). The row selection is binary encoded into the call parameter. ..."},"801":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclSysVarSetInteger.htm",l:-1,t:"cclSysVarSetInteger",i:3.8517174942517E-05,a:" CANoe  »  C Library API  »  Functions  » cclSysVarSetInteger cclSysVarSetInteger   Function Syntax int32_t cclSysVarSetInteger(int32_t sysVarID, int32_t x); Description Sets the value of a system variable of  Integer type. Parameters Return Values Example Availability The C Library is executed ..."},"802":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerFS/Functions/CAPLfunctionIso11783FSILResetBlockedTxTpEoma.htm",l:-1,t:"FSIL_ResetBlockedTxTpEoma",i:7.69929046312068E-05,a:"CAPL Functions  »  ISO11783  »  File Server Interaction Layer (FS IL)  » FSIL_ResetBlockedTxTpEoma FSIL_ResetBlockedTxTpEoma   Function Syntax long FSIL_ResetBlockedTxTpEoma( ); //Form 1 long FSIL_ResetBlockedTxTpEoma( dbNode node); //Form 2 Description Resets all EoMA messages that where blocked ..."},"803":{y:0,u:"../Content/Topics/CANoeCANalyzer/Ethernet/Protocols/ProtocolNTSCF.htm",l:-1,t:"Non-Time-Synchronous Control Format (NTSCF)",i:3.25858997144303E-05,a:"Ethernet  »  Protocol Overview  » Non-Time-Synchronous Control Format (NTSCF) Non-Time-Synchronous Control Format (NTSCF)   Protocol Information  [▲ back] The AVTP Control Format encapsulations provide a transport alternative for control data where the reliable, bounded-, and low-latency delivery ..."},"804":{y:0,u:"../Content/Topics/CAPLFunctions/Other/E2EProtection/CAPLfunctionARE2EGetProfileInfos.htm",l:-1,t:"ARE2EGetProfileInfos",i:1.96035070035483E-05,a:"CAPL Functions  »  General  »  Function Overview  » ARE2EGetProfileInfos ARE2EGetProfileInfos   Function Syntax long ARE2EGetProfileInfos (PDU * aPDU, char sigGroupName[], char aCategory[],long categoryLength, long \u0026 aProfile, long \u0026 dataIDMode, long \u0026 dataOffset , long \u0026 dataLength, long \u0026 ..."},"805":{y:0,u:"../Content/Topics/CANoeCANalyzer/General/Licensing/LicensingInformation.htm",l:-1,t:"Additional Information for Licensing",i:5.07261475781178E-05,a:" CANoe  » Licensing »  Software Based and Hardware Based  » Additional Information for Licensing Additional Information for Licensing   CANoe/CANalyzer are available in different variants (basic package) and with different additional bus system options. The application is available in the following ..."},"806":{y:0,u:"../Content/Topics/CANoeCANalyzer/DesktopManagement/DesktopManagementFurtherInformation.htm",l:-1,t:"Further Information (Desktop Concept)",i:0.000127190913180191,a:"Desktop Concept  » Further Information Further Information   General Functions and modes of behavior are identical for all desktops, regardless of whether they were created by the user or are standard desktops. Desktop options and window management options are saved with the configuration. ..."},"807":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Callbacks/CAPLfunctionSCCInvalidMessageInd.htm",l:-1,t:"SCC_InvalidMessageInd",i:6.24395493115898E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  Shared Callback Functions  » SCC_InvalidMessageInd SCC_InvalidMessageInd   Function Syntax  void SCC_InvalidMessageInd ( long MessageType, \n\nlong ErrorCode )  Description  The callback is called when a SDP or V2G ..."},"808":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939NodeLayer/Functions/CAPLfunctionJ1939AppAddrClaimed.htm",l:-1,t:"J1939AppAddrClaimed",i:1.99346589967799E-05,a:"CAPL Functions  »  J1939  »  J1939 NL  » J1939AppAddrClaimed J1939AppAddrClaimed (Callback)   Function Syntax dword J1939AppAddrClaimed( long ecuHandle ); Description Indicates that Address Claiming was performed successfully, which means that the control device is permitted to communicate on the ..."},"809":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/blocks/gnsssimulator/functions/gsHeightData.htm",l:-1,t:"Altitude Information",i:8.42774729311966E-05,a:"J1939  »  GNSS Simulator  » Altitude Information Altitude Information   The altitude information for positions in the GNSS Simulator refers to the rotation ellipsoid of the  WGS84  reference system. The altitude in the Graphics Window of the  main window  and in the model dialogs is specified in ..."},"810":{y:0,u:"../Content/Topics/CANoeCANalyzer/VTSystem/VTSystemBusBar.htm",l:-1,t:"Using the Bus Bars (VT System)",i:0.00012500121587953,a:"VT System  » Using the Bus Bars Using the Bus Bars   The  VT1004/VT1104  and  VT2004 VT System modules have two bus bars each. Lines a and b can be laid separately onto the internal bus bar lines via corresponding relays. These can be used to transmit the signal to an external device via the bus bar ..."},"811":{y:0,u:"../Content/Topics/CAPLFunctions/AUTOSARpduIL/Functions/CAPLfunctionARILControlWait.htm",l:-1,t:"ARILControlWait",i:3.28145657249482E-05,a:"CAPL Functions  »  AUTOSAR PDU IL  » ARILControlWait ARILControlWait   Function Syntax long ARILControlWait (dword flags) Description Stops sending, but accepts signal changes. Parameters Return Values Example — Availability ARILControlInit   •   ARILControlResume   •   ARILControlStart   •   ..."},"812":{y:0,u:"../Content/Topics/CANoeCANalyzer/Ribbon/Hardware/NetworkHardware/NetworkHardwareCAN.htm",l:-1,t:"CAN Network Hardware Configuration",i:0.000601770963627507,a:"Network Hardware  » CAN CAN Network Hardware Configuration Ribbon :  Hardware Tab | Network Hardware |CAN On the left side of the dialog all channels used in the current configuration are listed in a tree view. For CAN the following pages are available: CAN Channel Here you can find information ..."},"813":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectDataSourceSetup.htm",l:-1,t:"DataSourceSetup (COM Object)",i:9.09860418908059E-05,a:" CANoe  »  COM Interface  »  Objects  » DataSourceSetup DataSourceSetup Application  »  Configuration  »  CommunicationSetup  » DataSourceSetup Description The DataSourceSetup object provides the data source management API of the  Communication Setup . The data sources are accessible in the  Data ..."},"814":{y:0,u:"../Content/Topics/CANoeCANalyzer/AMDXCP/XCPDeviceConfigurationDialog.htm",l:-1,t:"Device Configuration (XCP)",i:0.0001383010086809,a:"Option AMD/XCP  »  XCP/CCP Window  » Device Configuration Device Configuration   If you have selected a device   in the tree view on the left side, all XCP/CCP-relevant setting options are displayed, grouped according to subject, on the right side. You can change the settings or reset them to the ..."},"815":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestWaitForMostNetState.htm",l:-1,t:"TestWaitForMostNetState",i:0.000242249409672382,a:"CAPL Functions  »  Test Feature Set  » TestWaitForMostNetState TestWaitForMostNetState   Function Syntax long TestWaitForMostNetState(long aOldState, long aNewState, unsigned long aTimeout); Description The function waits until the expiration of the time aTimeout for a transfer of the MOST NetState ..."},"816":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionHILAPIDestroySignalGenerator.htm",l:-1,t:"HILAPIDestroySignalGenerator",i:4.78014703111414E-05,a:"CAPL Functions  »  Test Service Library  »  Stimulus Functions  » HILAPIDestroySignalGenerator HILAPIDestroySignalGenerator   Function Syntax dword HILAPIDestroySignalGenerator(dword handle); Description Destroys an instance of a Signal Generator. Parameters Return Values Example Availability  "},"817":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestSetEcuOnline.htm",l:-1,t:"TestSetEcuOnline",i:7.55219094866171E-05,a:"CAPL Functions  »  Test Feature Set  » TestSetEcuOnline TestSetEcuOnline   Function Syntax void testSetEcuOnline (dbNode aNode); void testSetEcuOnline (char aNodeName[]); Description Connects the ECU to the bus. After calling the  testSetEcuOffline()  function the ECU can be reconnected to the bus ..."},"818":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/Trace/Columns/TraceColumnsMOST.htm",l:-1,t:"Columns for MOST",i:0.000182852533954355,a:" CANoe  » … »  Trace Window  »  Configuration  »  Column Configuration  » MOST Columns for MOST Context Menu Path :  Configuration | Column Configuration |MOST The Trace Window shows the messages in a tree view. In overwriting mode \n or when the Trace Window is paused the parameter names and values ..."},});