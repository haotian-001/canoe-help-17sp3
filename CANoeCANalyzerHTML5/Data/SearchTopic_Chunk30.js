define({"2007":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/NodeLayerTFS/Functions/CAPLfunctionCoTfsSdoBlockDownloadSegmentRequest.htm",l:-1,t:"coTfsSDOBlockDownloadSegmentRequest",i:5.28275036635897E-05,a:"CAPL Functions  »  CANopen  »  Test Feature Set Node Layer  » coTfsSDOBlockDownloadSegmentRequest coTfsSDOBlockDownloadSegmentRequest (Level 1)   Function Syntax long coTfsSDOBlockDownloadSegmentRequest( dword cont, dword seqNumber, byte inValueBuf[], dword valueBufSize, dword isLastSegment ); ..."},"2008":{y:0,u:"../Content/Topics/CAPLFunctions/CAN/Functions/CAPLfunctionGetMessageName.htm",l:-1,t:"getMessageName",i:0.000143707114619441,a:"CAPL Functions  »  CAN  » getMessageName getMessageName   Function Syntax dword getMessageName( dword id, dword context, char buffer[], dword size) Description Finds out the message name. Parameters Return Values If successful unequal 0, otherwise 0. Example Availability getFirstCANdbName   •   ..."},"2009":{y:0,u:"../Content/Topics/CANoeCANalyzer/A429/basicsA429/A429basics.htm",l:-1,t:"Basics (A429)",i:0.000132808998736173,a:"A429  » Basics Basics    ARINC word format In ARINC 429, data are transmitted in an ARINC word with the following format: The ARINC word contains fields with a defined meaning: P: Parity bit SSM: Sign/Status Matrix data: Area with application data SDI: Source/Destination Identifier label: ARINC ..."},"2010":{y:0,u:"../Content/Topics/SampConf/FlexRay/CANoe/2ClusterGateway/2ClusterGateway.htm",l:-1,t:"2 Cluster Gateway (FlexRay)",i:6.19642850757947E-05,a:"Sample Configurations  »  FlexRay  » 2 Cluster Gateway (FlexRay) 2 Cluster Gateway (FlexRay)   The Gateway Node is simulated by CANoe. \nThe both FlexRay buses are assigned to the same FIBEX database file. The ECUs of the PowerTrain simulated by CANoe and are distributed onto two clusters (see Table ..."},"2011":{y:0,u:"../Content/Topics/CAPLFunctions/AUTOSARpduIL/Functions/CAPLfunctionARILCalculateCRC.htm",l:-1,t:"ARILCalculateCRC",i:2.89426304575787E-05,a:"CAPL Functions  »  AUTOSAR PDU IL  » ARILCalculateCRC ARILCalculateCRC   Function Syntax long ARILCalculateCRC (char aMsgName[], cahr sigGroupName[], BYTE payload[], dword aPayloadLength, dword crc[]); Description Calculates the CRC of the PDU according to the given payload. Parameters Return Values ..."},"2012":{y:0,u:"../Content/Topics/CANoeCANalyzer/VTSystem/VT2516/VT2516VoltageMeasurement.htm",l:-1,t:"Voltage Measurement (VT2516)",i:4.10826830259922E-05,a:"VT2516  » Voltage Measurement Voltage Measurement   The VT2516 measures and preprocesses the voltage level of each channel\u0027s signal line, and makes it available to CANoe via the corresponding system variables. It does this regardless of whether the channel is used as in input or an output. The ..."},"2013":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/Functions/CAPLfunctionMOSTSyncDealloc.htm",l:-1,t:"mostSyncDealloc",i:5.95225259469687E-05,a:"CAPL Functions  »  MOST  » mostSyncDealloc mostSyncDealloc   Function Syntax long mostSyncDealloc(long label); Callback: void OnMostSyncDeallocResult(long deallocResult, long label); Description MOST25: This function releases reserved bandwidth for synchronous channels by sending a Dealloc system ..."},"2014":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/blocks/gnssmonitor/gmMainWnd.htm",l:-1,t:"Toolbar (J1939 GNSS Monitor)",i:0.000124144553800395,a:"J1939  »  GNSS Monitor  » Toolbar Toolbar   The toolbar provides the following symbols for controlling the GNSS Monitor:\n\n"},"2015":{y:0,u:"../Content/Topics/CAPLFunctions/Media/Properties/CAPLfunctionDrmFlags.htm",l:-1,t:"DrmFlags",i:3.21571136471415E-05,a:"CAPL Functions  »  Media API  »  Properties  » DrmFlags DrmFlags   Property DrmFlags Description Specifies whether a video media type requires the enforcement of copy protection. Data Type dword Remarks The value of this property is one of the following: None = 0 No copy protection is required. ..."},"2016":{y:0,u:"../Content/Topics/CANoeCANalyzer/AMDXCP/XCPWindowToolbar.htm",l:-1,t:"Toolbar (XCP/CCP Window)",i:0.000138760637157311,a:"Option AMD/XCP  »  XCP/CCP Window  » Toolbar Toolbar   The toolbar provides the following icons for the configuration. The functions are as follows:  "},"2017":{y:0,u:"../Content/Topics/CAPLFunctions/Media/Functions/CAPLfunctionMediaCreateSourceReaderFromURL.htm",l:-1,t:"MediaCreateSourceReaderFromURL",i:0.00014497745543643,a:"CAPL Functions  »  Media API  » MediaCreateSourceReaderFromURL MediaCreateSourceReaderFromURL   Function Syntax dword MediaCreateSourceReaderFromURL(char mediaFileUrl[]); Description Creates the source reader from a URL. For more information regarding the source reader see  source reader . ..."},"2018":{y:0,u:"../Content/Topics/CAPLFunctions/Security/Functions/CAPLfunctionX509Verifier_VerifyDataSignature.htm",l:-1,t:"X509Verifier_VerifyDataSignature",i:6.41810845781887E-05,a:"CAPL Functions  »  Security  » X509Verifier_VerifyDataSignature X509Verifier_VerifyDataSignature   Method  Syntax dword X509Verifier_VerifyDataSignature(qword objectHandle, qword certificateHandle, byte[] dataToBeVerified, dword dataToBeVerifiedLength, byte[] signatureToBeVerified, dword ..."},"2019":{y:0,u:"../Content/Topics/CAPLFunctions/Diagnostics/Functions/CAPLfunctionDiagSetRespPrimitiveByte.htm",l:-1,t:"diagSetRespPrimitiveByte",i:8.80621017024094E-05,a:"CAPL Functions  »  Diagnostics  » diagSetRespPrimitiveByte diagSetRespPrimitiveByte   Function Syntax long diagSetRespPrimitiveByte( diagRequest request, \n DWORD bytePos, DWORD newValue); Method  Syntax diagRequest::SetRespPrimitiveByte( DWORD bytePos, DWORD newValue); Description Writes one byte of ..."},"2020":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionGetDrift.htm",l:-1,t:"getDrift",i:0.00019408466139686,a:"CAPL Functions  »  General  »  Function Overview  » getDrift getDrift   Function Syntax int getDrift(); Description Determines the constant deviation when Drift is set. Parameters — Return Values Drift in parts per thousand. Example Availability getJitterMax   •   getJitterMin   •   setDrift   •   ..."},"2021":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/Trace/Columns/TraceColumnsLIN.htm",l:-1,t:"Columns for LIN",i:9.63168741635631E-05,a:" CANoe  » … »  Trace Window  »  Configuration  »  Column Configuration  » LIN Columns for LIN Context Menu Path :  Configuration | Column Configuration |LIN Sample Configurations and Applications   •  "},"2022":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionTriggerEx.htm",l:-1,t:"triggerEx",i:5.4357374246757E-05,a:"CAPL Functions  »  General  »  Function Overview  » triggerEx triggerEx   Function Syntax void triggerEx(char name[]); Description Sends a trigger event to a CANoe Logging or Trigger Block specified by name. For a Logging Block, the trigger event starts and stops logging, depending on the trigger ..."},"2023":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Selectors/CAPLfunctionLINSyncError.htm",l:-1,t:"linSyncError Selectors",i:5.97574250452446E-05,a:"CAPL Functions  »  LIN  » linSyncError Selectors linSyncError Selectors    "},"2024":{y:0,u:"../Content/Topics/CANoeCANalyzer/Test/TestModularization.htm",l:-1,t:"Modularization",i:8.17207740602756E-05,a:"Test » Modularization Modularization   Test functions and test cases can be managed in libraries. Thereby you can easily combine existing modules to new test scenarios. Implementation CAPL Modules are embedded with include(). .NET Full language support, see  .NET test module – call CAPL test ..."},"2025":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerTC/Functions/CAPLfunctionIso11783TCILDelayTxTpDpo.htm",l:-1,t:"TCIL_DelayTxTpDpo",i:6.97870977342347E-05,a:"CAPL Functions  »  ISO11783  »  Task Controller Interaction Layer (TC IL)  » TCIL_DelayTxTpDpo TCIL_DelayTxTpDpo   Function Syntax long TCIL_DelayTxTpDpo( long dpoToBlock); //Form 1 long TCIL_DelayTxTpDpo( dbNode node, long dpoToBlock); //Form 2 Description Delays transmitting of a ETP.DPO message ..."},"2026":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectMcEthernetSettings.htm",l:-1,t:"McEthernetSettings (COM Object)",i:3.52386748331134E-05,a:" CANoe  »  COM Interface  »  Objects  » McEthernetSettings McEthernetSettings Application  »  Configuration  »  GeneralSetup  »  CCPSetup  »  McECUs  »  McECU  » McEthernetSettings Application  »  Configuration  »  GeneralSetup  »  XCPSetup  »  McECUs  »  McECU  » McEthernetSettings Description The ..."},"2027":{y:0,u:"../Content/Topics/CAPLFunctions/CANstress/Functions/CAPLfunctionCANstressSetDisturbanceSequence.htm",l:-1,t:"CANstressSetDisturbanceSequence",i:2.1414782593373E-05,a:"CAPL Functions  »  CANstresss  » CANstressSetDisturbanceSequence CANstressSetDisturbanceSequence   Function Syntax void CANstressSetDisturbanceSequence (char sequence[], \n dword resolution); Description Sets the disturbance sequence. Parameters Return Values — Example — Example Availability  "},"2028":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionSetMediaFile.htm",l:-1,t:"SetMediaFile",i:0.000199345870802205,a:"CAPL Functions  »  General  »  Function Overview  » SetMediaFile SetMediaFile   Function Syntax SetMediaFile(panel, control, mediafile); Description Replaces the media file of the Panel Designer control during runtime:  Media Player The panel is accessed by its individual panel name that is entered ..."},"2029":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINInvertHeaderBit.htm",l:-1,t:"linInvertHeaderBit",i:0.000158211620549046,a:"CAPL Functions  »  LIN  » linInvertHeaderBit linInvertHeaderBit   Function Syntax dword linInvertHeaderBit(dword byteIndex, dword bitIndex); // form 1 dword linInvertHeaderBit(dword byteIndex, dword bitIndex, \n dword level); // form 2 dword linInvertHeaderBit(dword byteIndex, dword bitIndex, \n dword ..."},"2030":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestSetVerdictModule.htm",l:-1,t:"TestSetVerdictModule",i:4.34249207829591E-05,a:"CAPL Functions  »  Test Feature Set  » TestSetVerdictModule TestSetVerdictModule   Function Syntax void TestSetVerdictModule (Verdict aVerdict); Description This function sets the verdict of the test module. With this function the automatic verdict propagation of test cases to the test module can be ..."},"2031":{y:0,u:"../Content/Topics/CANoeCANalyzer/General/DatabaseEditors.htm",l:-1,t:"Database Editors",i:3.76216240883706E-05,a:" CANoe  » Database Editors Database Editors   Editors/Viewers for Bus Systems Editors/Viewers for Diagnostic Descriptions  "},"2032":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclAbstractCreateAddress.htm",l:-1,t:"cclAbstractCreateAddress",i:7.14766735280419E-05,a:" CANoe  »  C Library API  »  Functions  » cclAbstractCreateAddress cclAbstractCreateAddress   Function Syntax typedef int32_t cclAddressID; cclAddressID cclAbstractCreateAddress(cclServiceID serviceID, const char* endPointName); Description Creates an abstract binding specific address, which can be ..."},"2033":{y:0,u:"../Content/Topics/CANoeCANalyzer/ISO11783/FileServer/FSOverview.htm",l:-1,t:"File Server (ISO11783)",i:3.86575852430482E-05,a:"ISO11783  » File Server File Server    "},"2034":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCSetResponseCode.htm",l:-1,t:"SCC_SetResponseCode",i:6.27193832077046E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Simulation Data   »  EVSE Functions  » SCC_SetResponseCode SCC_SetResponseCode   Function Syntax  long SCC_SetResponseCode ( char ResponseCode[] ) Description Sets the return code of the next message to be sent. ..."},"2035":{y:0,u:"../Content/Topics/CAPLFunctions/CANoeIL/CAPLfunctionsCANoeILOverview.htm",l:-1,t:"CANoe IL CAPL Functions",i:0.00238381960319844,a:"CAPL Functions  » CANoe IL CAPL Functions CANoe IL CAPL Functions   ON THIS PAGE: Callback Interface  [▲ back] Control  [▲ back] Fault Injection and Disturbance  [▲ back] Functions for Test Setup and Simulation Setup  [▲ back] Various control and disturbance functions are provided for implementing a ..."},"2036":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCCreateChargeParameterDiscoveryResACIso.htm",l:-1,t:"SCC_CreateChargeParameterDiscoveryResAC_ISO",i:6.24395493115898E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Test Functions  »  Shared Functions  » SCC_CreateChargeParameterDiscoveryResAC_ISO SCC_CreateChargeParameterDiscoveryResAC_ISO   Function Syntax long SCC_CreateChargeParameterDiscoveryResAC_ISO \n( byte ..."},"2037":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILDelayRxMessage.htm",l:-1,t:"Iso11783IL_DelayRxMessage",i:6.37606090146847E-05,a:"CAPL Functions  »  ISO11783   »  ISO11783 Interaction Layer   » Iso11783IL_DelayRxMessage Iso11783IL_DelayRxMessage   Function Syntax long Iso11783IL_DelayRxMessage(dword pgn, dword sourceAddress, qword filterMask, qword filterValue, dword delay); // form 1 long Iso11783IL_DelayRxMessage(dword pgn, ..."},"2038":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCCreatePowerDeliveryReqACIso.htm",l:-1,t:"SCC_CreatePowerDeliveryReqAC_ISO",i:7.3101815602508E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Test Functions  »  Shared Functions  » SCC_CreatePowerDeliveryReqAC_ISO SCC_CreatePowerDeliveryReqAC_ISO   Function Syntax long SCC_CreatePowerDeliveryReqAC_ISO \n( byte SessionID[], char ChargeProgress[], \nlong ..."},"2039":{y:0,u:"../Content/Topics/CAPLFunctions/CommunicationObjects/Objects/CAPLfunctionConsumedFieldRef.htm",l:-1,t:"consumedFieldRef",i:0.000152157492000197,a:"CAPL Functions  »  Communication Objects  » consumedFieldRef consumedFieldRef   Function Syntax consumedFieldRef * \u003cvar\u003e; // form 1 consumedFieldRef \u003cField\u003e \u003cvar\u003e; // form 2 consumedFieldRef \u003cDatatype\u003e \u003cvar\u003e; // form 3 Method  Syntax consumedFieldRef::AbstractIsFieldRequested ..."},"2040":{y:0,u:"../Content/Topics/CAPLFunctions/MapWindowAPI/Functions/CAPLfunctionSetMapObjectHeading.htm",l:-1,t:"SetMapObjectHeading",i:5.55042100380523E-05,a:"CAPL Functions  »  Map Window API  » SetMapObjectHeading SetMapObjectHeading   Function Syntax long SetMapObjectHeading( long handle, float rotation ); Description Sets the heading of a map object. Parameters Return Values Example Availability  "},"2041":{y:0,u:"../Content/Topics/CANoeCANalyzer/Car2x/windows/wlanPacketBuilder/wlanpbWndSettings.htm",l:-1,t:"Configure the WLAN Packet Builder (Car2x)",i:7.12027351423437E-05,a:"WLAN Packet Builder  » Configuration Configuration Ribbon|Simulation|Simulation Setup|Context of a bus line|Insert WLAN Packet Builder|Configuration... Default Settings In this dialog you can specify the default values that should be used if a new packet is created and added to the packet list. ..."},"2042":{y:0,u:"../Content/Topics/vCDL/Language/vCDLEvents.htm",l:-1,t:"Events (vCDL)",i:5.10010054378927E-05,a:" CANoe  »  vCDL  »  vCDL 1.4  »  Language  » Events Events   Events are declared within a service interface by the keyword event followed by the event’s data type, which identifies the data contained in the notification, and the event name. The event declaration is finished by a semicolon. Note that ..."},"2043":{y:0,u:"../Content/Topics/CAPLFunctions/FlexRay/Functions/CAPLfunctionFRSetPayloadLengthInByte.htm",l:-1,t:"frSetPayloadLengthInByte",i:3.23882963415035E-05,a:"CAPL Functions  »  FlexRay  » frSetPayloadLengthInByte frSetPayloadLengthInByte   Function Syntax frSetPayloadLengthInByte( \u003cframe var\u003e, dword \u003cdlc\u003e ); Description This function sets the payload (data length) of the object in bytes. In the event of an uneven value, the length of the buffer will be ..."},"2044":{y:0,u:"../Content/Topics/CAPLFunctions/Other/E2EProtection/CAPLfunctionCrcCalculateCRC8H2F.htm",l:-1,t:"Crc_CalculateCRC8H2F",i:1.96035070035483E-05,a:"CAPL Functions  »  General  »  Function Overview  » Crc_CalculateCRC8H2F Crc_CalculateCRC8H2F   Function Syntax long Crc_CalculateCRC8H2F (byte data[], dword dataSize, dword dataOffset, dword crcLength, dword crcStartValue, dword firstCall, dword\u0026 crcCalculated); Description Calculates the ..."},"2045":{y:0,u:"../Content/Topics/CAPLFunctions/Diagnostics/Functions/CAPLfunctionDiagvFlashLoadProject.htm",l:-1,t:"vFlashLoadProject",i:5.96137726539655E-05,a:"CAPL Functions  »  Diagnostics  » vFlashLoadProject vFlashLoadProject   Function Syntax void vFlashLoadProject(char projectPath[]); Description Loads the provided vFlash project stored under given path. A call to CAPL callback function vFlashLoadProjectCompleted will indicate that the project was ..."},"2046":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayerVT/Functions/CAPLfunctionIso11783VTILActivateWorkingSet.htm",l:-1,t:"VTIL_ActivateWorkingSet",i:6.04859702803813E-05,a:"CAPL Functions  »  ISO11783  »  Virtual Terminal Interaction Layer (VT IL)   » VTIL_ActivateWorkingSet VTIL_ActivateWorkingSet   Function Syntax long VTIL_ActivateWorkingSet(dbNode workingSetMaster); // form 1 long VTIL_ActivateWorkingSet(byte workingSetMasterAddress); // form 2 long ..."},"2047":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINSetChecksumCompatibility.htm",l:-1,t:"linSetChecksumCompatibility",i:4.94629661839239E-05,a:"CAPL Functions  »  LIN  » linSetChecksumCompatibility linSetChecksumCompatibility   Function Syntax long linSetChecksumCompatibility(long channel); // form 1 long linSetChecksumCompatibility(); // form 2 Description Switches the checksum calculation model of all frames that have at least one ..."},"2048":{y:0,u:"../Content/Topics/CAPLFunctions/Car2x/Functions/CAPLfunctionC2xLoadRoute.htm",l:-1,t:"C2xLoadRoute",i:4.83323854682765E-05,a:"CAPL Functions  »  Car2x  » C2xLoadRoute C2xLoadRoute   Function Syntax long C2xLoadRoute(char* routeFilePath, char* routeName, int loopFlag) Description This function loads the route with the name routeName from the file specified by routeFilePath parameter and adds it to the currently loaded ..."},"2049":{y:0,u:"../Content/Topics/CANoeCANalyzer/Ethernet/PacketBuilder/EthernetPacketBuilderWindow.htm",l:-1,t:"Ethernet Packet Builder: Window",i:0.000124741876101396,a:"Ethernet  »  Ethernet Packet Builder  » Window Ethernet Packet Builder: Window   The window of the Ethernet Packet Builder is divided into several parts: Packet List Packet Information Raw Frame   With the button [Configuration...] you will open the  configuration dialog ."},"2050":{y:0,u:"../Content/Topics/CANoeCANalyzer/VTSystem/VT2710/VT2710.htm",l:-1,t:"VT2710 – Serial Interface Module (VT System)",i:0.000116464869704183,a:"VT System  »  Module s » VT2710 – Serial Interface Module VT2710 – Serial Interface Module    "},"2051":{y:0,u:"../Content/Topics/CAPLFunctions/Security/Functions/CAPLfunctionX509Verifier_VerifySigningRequest.htm",l:-1,t:"X509Verifier_VerifySigningRequest",i:6.41810845781887E-05,a:"CAPL Functions  »  Security  » X509Verifier_VerifySigningRequest X509Verifier_VerifySigningRequest   Method  Syntax dword X509Verifier_VerifySigningRequest(qword objectHandle, qword csrHandle, dword\u0026 verificationResult) Description Verification function for PKCS#10 Certificate Signing Requests ..."},"2052":{y:0,u:"../Content/Topics/CANoeCANalyzer/Interfaces/MATLAB/MATLABVersionHistory.htm",l:-1,t:"Version History (MATLAB Integration)",i:0.000155647712778502,a:"MATLAB Integration Package  » Version History Version History   New Features in Version 8.3: Support of MATLAB Release R2023a. Support of Microsoft Visual Studio 2022. Support of fields for distributed objects. Support of communication direction internal for distributed objects. New Features in ..."},"2053":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectDataSources.htm",l:-1,t:"DataSources (COM Object)",i:7.37764985241184E-05,a:" CANoe  »  COM Interface  »  Objects  » DataSources DataSources Application  »  Configuration  »  CommunicationSetup  »  DataSourceSetup  » DataSources Description The DataSources object represents a snapshot of the collection of all configured  DataSource  objects. The snapshot is taken at the time ..."},"2054":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionChkQueryStatProbeIntervalMax.htm",l:-1,t:"ChkQuery_StatProbeIntervalMax",i:4.82020161758551E-05,a:"CAPL Functions  »  Test Service Library  »  Status Report Functions  » ChkQuery_StatProbeIntervalMax ChkQuery_StatProbeIntervalMax   Function Syntax double ChkQuery_StatProbeIntervalMax (dword aCheckId); Method  Syntax check.QueryStatProbeIntervalMax(); Description Returns the maximum timely ..."},"2055":{y:0,u:"../Content/Topics/CAPLFunctions/Sensor/Functions/CAPLfunctionSetPauseMode.htm",l:-1,t:"SetPauseMode",i:6.12619875133155E-05,a:"CAPL Functions  »  Sensor  » SetPauseMode SetPauseMode   Method  Syntax SensorErrorCode sysvarSensorNamespace.SetPauseMode(dword pauseMode, dword pauseOrFrameLenTicks); Description Sets the pause mode and optionally the pause or frame length of a simulated sensor to the given values. Parameters ..."},"2056":{y:0,u:"../Content/Topics/CAPLFunctions/CommunicationObjects/Functions/CAPLfunctionLookupRxSignal.htm",l:-1,t:"LookupRxSignal",i:4.09902356846758E-05,a:"CAPL Functions  »  Communication Objects  » LookupRxSignal LookupRxSignal   Function Syntax rxSignalRef * LookupRxSignal(char[] path); Description Searches for the specified rx signal. The path must be complete including namespaces and endpoint(s): (Namespace::)+Signal[Receiver] for broadcast ..."},"2057":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/Write/WriteWindowNotifications/02TraceWindow.htm",l:-1,t:"Trace Window",i:2.79090323299601E-05,a:" CANoe  »  Write Window   »  Notifications  » Trace Window Trace Window   Trace Window"},"2058":{y:0,u:"../Content/Topics/CANoeCANalyzer/DesktopManagement/DesktopAdministrationDesktopTab.htm",l:-1,t:"Desktop Tab",i:5.64660382446981E-05,a:"Desktop concept  » Desktop Tab Desktop Tab   A simple command allows the user to toggle back and forth between different desktops. The desktop page for activating desktops is located along the lower border of the program window. Its page lists all desktops existing in the configuration. This ..."},"2059":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionChkCreateNodeMsgsRelCycleTimeViolation.htm",l:-1,t:"ChkCreate_NodeMsgsRelCycleTimeViolation, ChkStart_NodeMsgsRelCycleTimeViolation",i:9.81471387494566E-05,a:"CAPL Functions  »  Test Service Library  »  Checks  » ChkCreate_NodeMsgsRelCycleTimeViolation, ChkStart_NodeMsgsRelCycleTimeViolation ChkCreate_NodeMsgsRelCycleTimeViolation, ChkStart_NodeMsgsRelCycleTimeViolation   Function Syntax dword ChkCreate_NodeMsgsRelCycleTimeViolation (Node aNode, double ..."},"2060":{y:0,u:"../Content/Topics/CANoeCANalyzer/Car2x/protocols/GBT310243/protocolGBT310243DSRCShortMessageProtocol.htm",l:-1,t:"DSRC Short Message Protocol (DSMP)",i:8.60172887442064E-05,a:"Protocol Overview  » DSRC Short Message Protocol DSRC Short Message Protocol (DSMP)   Protocol Information The DSRC Short Message Protocol (GB/T 31024.3) is a network protocol containing basic information for the C-V2X communication between individual ITS stations. Protocol Dependencies  [▲ top] The ..."},"2061":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestWaitForScopeFitData.htm",l:-1,t:"testWaitForScopeFitData",i:8.85628646661868E-05,a:"CAPL Functions  »  Scope  » testWaitForScopeFitData testWaitForScopeFitData   Function Syntax long testWaitForScopeFitData(message aMessage, dword msgFieldStart, dword msgFieldEnd); // form 1 long testWaitForScopeFitData(message aMessage, dword msgFieldStart, dword msgFieldEnd, dword preTimeNs, ..."},"2062":{y:0,u:"../Content/Topics/CAPLFunctions/AUTOSARpduIL/Functions/CAPLfunctionARILFaultInjectionDisablePDU.htm",l:-1,t:"ARILFaultInjectionDisablePDU",i:4.12432555396294E-05,a:"CAPL Functions  »  AUTOSAR PDU IL  » ARILFaultInjectionDisablePDU ARILFaultInjectionDisablePDU   Function Syntax long ARILFaultInjectionDisablePDU (dbMsg); Description Disables the sending of the PDU except by calling the function  ARILSetPDUEvent . Parameters Return Values Example — Availability  "},"2063":{y:0,u:"../Content/Topics/CANoeCANalyzer/RTSetup/DistributedMode/DistributedModeTroubleshooting.htm",l:-1,t:"Distributed Mode: Troubleshooting",i:0.000140011935454956,a:"Distributed Mode  » Troubleshooting Distributed Mode: Troubleshooting    "},"2064":{y:0,u:"../Content/Topics/CAPLFunctions/Car2x/Functions/CAPLfunctionC2xGetStationPropertyInt64.htm",l:-1,t:"C2xGetStationPropertyInt64",i:4.83323854682765E-05,a:"CAPL Functions  »  Car2x  » C2xGetStationPropertyInt64 C2xGetStationPropertyInt64   Function Syntax int64 C2xGetStationPropertyInt64(char* propertyName); // form 1 int64 C2xGetStationPropertyInt64(char* stationName, char* propertyName); // form 2 Description This function returns the value of a ..."},"2065":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestGetWaitFrPDUData.htm",l:-1,t:"TestGetWaitFrPDUData",i:0.000133117104401821,a:"CAPL Functions  »  Test Feature Set  » TestGetWaitFrPDUData TestGetWaitFrPDUData   Function Syntax long TestGetWaitFrPDUData (frPDU aPDU); long TestGetWaitFrPDUData (dword index, frPDU aPDU); Description If a valid FlexRay PDU is the last event that triggers a wait instruction, the PDU’s content can ..."},"2066":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/SimulationSetup/SimulationSetupAssignDatabase.htm",l:-1,t:"Simulation Setup: Assigning Databases",i:0.000218131363433517,a:"Simulation Setup  » Assigning Database Simulation Setup: Assigning Databases   In the Simulation Setup, you can add one or more databases to the current network: Click an empty spot in the Simulation Setup to open the context menu, and then click  System View. Select the context menu command Add.... ..."},"2067":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionGraphicsWindowModifyGroup.htm",l:-1,t:"graphicsWindowModifyGroup",i:1.96035070035483E-05,a:"CAPL Functions  »  General  »  Function Overview  » graphicsWindowModifyGroup graphicsWindowModifyGroup   Function Syntax void graphicsWindowModifyGroup(char[] windowName, byte mode, char[] groupName); Description Modifies group enabled and expanded states. Parameters Return Values — Example ..."},"2068":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestCaseSkipped.htm",l:-1,t:"TestCaseSkipped",i:4.34249207829591E-05,a:"CAPL Functions  »  Test Feature Set  » TestCaseSkipped TestCaseSkipped   Function Syntax TestCaseSkipped(char[] ident, char[] title); Description This function can be used to mark a test case as unexecuted. This will then appear as a \"skipped\" test case in the Test Report. The verdict of the test ..."},"2069":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCCreateCMSetKeyReq.htm",l:-1,t:"SCC_CreateCM_Set_Key_Req",i:6.24395493115898E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  SLAC Test Functions  »  Shared Functions  » SCC_CreateCM_Set_Key_Req SCC_CreateCM_Set_Key_Req   Function Syntax void SCC_CreateCM_Set_Key_Req ( byte SourceMac[], byte TargetMac[], byte NID[], byte NMK[] ) Description ..."},"2070":{y:0,u:"../Content/Topics/vCDL/Language/vCDLServicePDUs.htm",l:-1,t:"Service PDUs (vCDL)",i:5.10010054378927E-05,a:" CANoe  »  vCDL  »  vCDL 1.4  »  Language  » Service PDUs Service PDUs   Service PDUs are simply PDUs declared within a service interface. They reference a PDU type and thus specify a layout for data elements to be transmitted with the PDU. A service PDU is declared by the keyword pdu, followed by a ..."},"2071":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLFunctioncclLinSetPreDispatchMessageHandler.htm",l:-1,t:"cclLinSetPreDispatchMessageHandler (CAPL Function)",i:3.86360090043396E-05,a:" CANoe  »  C Library API  »  Functions  » cclLinSetPreDispatchMessageHandler (CAPL Function) cclLinSetPreDispatchMessageHandler   Function Syntax struct cclLinPreDispatchMessage {   int64_t  time;   int32_t  channel;   uint8_t  dir;   uint32_t id;   uint32_t flags;   uint32_t dlc;   uint8_t  ..."},"2072":{y:0,u:"../Content/Topics/SampConf/ISO11783/CANoe/MoreExamples/ObjectPoolChecker/ObjectPoolChecker_CN.htm",l:-1,t:"Object Pool Checker",i:5.12482751306093E-05,a:"Sample Configurations  »  ISO11783  » Object Pool Checker Object Pool Checker   With this configuration an  object pool  - available as binary file (*.iop) or as XML file (*.iopx) - can be tested with the  Virtual Terminal . The IOP file must conform to the ISO11783 Part 6 format. Introduction On ..."},"2073":{y:0,u:"../Content/Topics/CAPLFunctions/SmartCharging/Functions/CAPLfunctionSCCCreateSessionStopReqIso.htm",l:-1,t:"SCC_CreateSessionStopReq_ISO",i:6.24395493115898E-05,a:"CAPL Functions  »  Smart Charging  »  SCC Modeling Libraries (Simulation Setup)  »  V2G Test Functions  »  Shared Functions  » SCC_CreateSessionStopReq_ISO SCC_CreateSessionStopReq_ISO   Function Syntax long SCC_CreateSessionStopReq_ISO \n( byte SessionID[], char ChargingSession[] ) Description ..."},"2074":{y:0,u:"../Content/Topics/CANoeCANalyzer/Car2x/windows/ProtocolAnalyzer/ProtocolAnalyzer.htm",l:-1,t:"Car2x Protocol Analyzer",i:5.93642921923332E-05,a:"Car2x  »  Windows  » Protocol Analyzer Car2x Protocol Analyzer Ribbon|Ribbon Tab Analysis |Group Car2x |Protocol Analyzer   Option Car2x"},});