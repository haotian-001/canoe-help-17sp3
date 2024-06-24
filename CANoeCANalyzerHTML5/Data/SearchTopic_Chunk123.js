define({"8156":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/J1939CANfd/1939CANfd.htm",l:-1,t:"J1939 CAN FD",i:6.02509852872256E-05,a:"J1939  » J1939 CAN FD J1939 CAN FD   J1939 CAN FD CANoe starting with version 15.3 supports J1939 based on CAN FD according to the specifications SAE J1939-17 and SAE J1939-22. CAN FD enables transmission rates of the user data of up to 2000 kBaud with a length of up to 64 bytes. This increases the ..."},"8157":{y:0,u:"../Content/Topics/CANoeCANalyzer/MOST/MOSTHowTos/MOSTHowToFindInterestedMessagesInTraceWindow.htm",l:-1,t:"MOST: How to find messages of interest in the Trace Window",i:2.68490380791446E-05,a:"MOST  »  How to...  » MOST: How to find messages of interest in the Trace Window MOST: How to find messages of interest in the Trace Window   Text Search The text search entry field can be found in the  toolbar  of the  Trace Window . You can search for any character strings (e.g., including ..."},"8158":{y:0,u:"../Content/Topics/CANoeCANalyzer/SCOPE/ScopeTestModuleIntegration.htm",l:-1,t:"Integration in Test Modules (Scope)",i:4.53927223068943E-05,a:"Scope  » Integration in Test Modules Integration in Test Modules   You can address the Scope Window via a test module CAPL file: Use  scopeConnect()  to establish a USB connection. Use  scopeTriggerNow()  to trigger. Use  testWaitForScopeEvent()  to check whether your commands were executed. Scope ..."},"8159":{y:0,u:"../Content/Topics/CANoeCANalyzer/Interfaces/IOPiggy/IOPiggyTechnicalData.htm",l:-1,t:"IOpiggy: Technical Data",i:5.33153011728679E-05,a:"IOpiggy  » Technical Data IOpiggy: Technical Data    "},"8160":{y:0,u:"../Content/Topics/CANoeCANalyzer/Connectivity/HTTPClientAPI.htm",l:-1,t:"HTTP Client API (Connectivity)",i:0.000174507169011954,a:" CANoe  »  Connectivity  » HTTP Client API HTTP Client API   Introduction Using the Client API allows sending client requests within the HTTP communication. The protocol-specific information of the HTTP protocol is available here. The _HTTP::Client distributed object provides methods for sending the ..."},"8161":{y:0,u:"../Content/Topics/CANoeCANalyzer/Ribbon/RibbonHome.htm",l:-1,t:"Home (Ribbon)",i:0.000213384617409218,a:"Ribbon  » Home Home Ribbon : Home Tab  "},"8162":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestWaitForNextCall.htm",l:-1,t:"TestWaitForNextCall",i:7.38192224135961E-05,a:"CAPL Functions  »  Test Feature Set  » TestWaitForNextCall TestWaitForNextCall   Function Syntax long TestWaitForNextCall(providedMethodRef * method, dword timeoutMs); // form 1 long TestWaitForNextCall(distObjMethodRef * method, dword timeoutMs); // form 2 Description Waits for the next call of the ..."},"8163":{y:0,u:"../Content/Topics/CANoeCANalyzer/Connectivity/DDSModelingDOs.htm",l:-1,t:"Distributed Objects (DOs) for Data Distribution Service (DDS) (Connectivity)",i:0.000195361923955783,a:" CANoe  »  Connectivity  »  DDS Protocol  » Distributed Objects (DOs) Distributed Objects (DOs) for Data Distribution Service (DDS)   DDS Modeling with Distributed Objects DDS participants are modeled in CANoe using the new communication concept and  distributed objects  (DO). Distributed objects of ..."},"8164":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclSomeIPEventGroupProviderGetFields.htm",l:-1,t:"cclSomeIPEventGroupProviderGetFields",i:3.86360090043396E-05,a:" CANoe  »  C Library API  »  Functions  » cclSomeIPEventGroupProviderGetFields cclSomeIPEventGroupProviderGetFields   Function Syntax int32_t cclSomeIPEventGroupProviderGetFields(cclSomeIPEventGroupProviderID eventGroupProviderID, cclFieldProviderID* buffer, int32_t* bufferSize); Description Returns ..."},"8165":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/blocks/gnsssimulator/functions/gsFileReplay.htm",l:-1,t:"Playing Back Logging Files",i:7.16456130323708E-05,a:"J1939  »  GNSS \n Simulator  » Playing Back Logging Files Playing Back Logging Files   You can use GNSS Simulator to play back GNSS logging files \n with position information, for example information that was created with \n the GNSS Monitor. Position data can be modified with a text editor using \n the ..."},"8166":{y:0,u:"../Content/Topics/CANoeCANalyzer/MOST/MOSTHowTos/MOSTHowToWakeUpMOSTSytem.htm",l:-1,t:"MOST: How to Wake Up the MOST System",i:2.68490380791446E-05,a:"MOST  »  How to...  » How to Wake Up the MOST System MOST: How to Wake Up the MOST System   If your MOST interface does not indicate a light (e.g., in the  State Window ) despite being connected correctly to the MOST ring, it is possible that your MOST ring has entered sleep mode following a ..."},"8167":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939NodeLayer/Functions/CAPLfunctionJ1939TableTime.htm",l:-1,t:"J1939TableTime",i:1.99346589967799E-05,a:"CAPL Functions  »  J1939  »  J1939 NL  » J1939TableTime J1939TableTime   Function Syntax dword J1939TableTime( char busName[] ); Description The function returns the time stamp of the last received \"Request for \n Address Claim\". Use this function to determine, if the network table \n is up to data. ..."},"8168":{y:0,u:"../Content/Topics/CAPLFunctions/TCPIPAPI/Functions/CAPLfunctionIpsecPolicyDatabaseAdd.htm",l:-1,t:"ipsecPolicyDatabaseAdd",i:4.47117629458147E-05,a:"CAPL Functions  »  TCP/IP API  » ipsecPolicyDatabaseAdd ipsecPolicyDatabaseAdd   Function Syntax long ipsecPolicyDatabaseAdd(IP_Endpoint source, dword sourcePrefix, IP_Endoint destination, dword destPrefix, char[] nextLayerProtocol, char[] policy); Description With this function it is possible to ..."},"8169":{y:0,u:"../Content/Topics/CANoeCANalyzer/MOST/SimulationConcept/ApplicationSocket/FunctionService.htm",l:-1,t:"Function Service (MOST Simulation Concept)",i:3.53959503148523E-05,a:"MOST  »  Simulation Concept  » Function Service Function Service   The function service simplifies the creation of simulated function blocks. \n The service performs the following tasks: Responds to the FBlock.FktIds.Get() request with \n FBlock.FktIds.Status(RLE-coded list with function IDs) Sends ..."},"8170":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILPDDConnectSysVarWithSection.htm",l:-1,t:"Iso11783IL_PDDConnectSysVarWithSection",i:3.67775937289007E-05,a:"CAPL Functions  »  ISO11783  »  ISO11783 Interaction Layer   » Iso11783IL_PDDConnectSysVarWithSection Iso11783IL_PDDConnectSysVarWithSection   Function Syntax long Iso11783IL_PDDConnectSysVarWithSection(dword ddiOfCondensedState, dword elementNumber, dword sectionNumber, char[] sysVarNameWithPath); ..."},"8171":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINWakeInternal.htm",l:-1,t:"linWakeupInternal",i:3.91004506325882E-05,a:"CAPL Functions  »  LIN  » linWakeupInternal linWakeupInternal   Function Syntax long linWakeupInternal(); Description Wakes up the LIN bus without sending any wakeup signals. Parameters — Return Values On success, a value unequal to zero, otherwise zero. Example — Availability  "},"8172":{y:0,u:"../Content/Topics/CAPLFunctions/MapWindowAPI/Functions/CAPLfunctionSetMapObjectFillColor.htm",l:-1,t:"SetMapObjectFillColor",i:5.55042100380523E-05,a:"CAPL Functions  »  Map Window API  » SetMapObjectFillColor SetMapObjectFillColor   Function Syntax long SetMapObjectFillColor( long handle, float fillColor ); Description Sets the fill color of a map object or the text color of a text object. Parameters Return Values Example Availability  "},"8173":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectConnectedPiggy.htm",l:-1,t:"ConnectedPiggy (COM Object)",i:4.13124441968532E-05,a:" CANoe  »  COM Interface  »  Objects  » ConnectedPiggy ConnectedPiggy Application  »  Configuration  »  VTSystem  »  ConnectedModules  »  ConnectedModule  »  ConnectedPiggies  » ConnectedPiggy Description The ConnectedPiggy object represents a piggyback module connected to a VT System module. ..."},"8174":{y:0,u:"../Content/Topics/CAPLFunctions/IP/AUTOSARethIL/Functions/CAPLFunctionAREthTlsAuthenticateAsServerWithConfiguration.htm",l:-1,t:"AREthTlsAuthenticateAsServerWithConfiguration",i:7.23530257203265E-05,a:"CAPL Functions  »  Ethernet  »  AUTOSAR Eth IL  » AREthTlsAuthenticateAsServerWithConfiguration AREthTlsAuthenticateAsServerWithConfiguration   Function Syntax AREthTlsAuthenticateAsServerWithConfiguration(dword connectionHandle,char configuration[]) Description Starts the (D) TLS  authentication ..."},"8175":{y:0,u:"../Content/Topics/CANoeCANalyzer/MOST/MOSTHighProtocol/MOSTHighProtocolAutomaticMHPReceiver.htm",l:-1,t:"Automatic MHP Receiver(MOST High Protocol)",i:5.48084017274452E-05,a:"MOST  »  MOST High Protocol  » Automatic MHP Receiver Automatic MHP Receiver   Introduction The automatic MHP receiver serves as a simple data sink (DSI) for incoming connections. It implements the receiver-side MOST High Protocol (MHP). The protocol parameters are set for this in such a way that as ..."},"8176":{y:0,u:"../Content/Topics/CAPLFunctions/CANoeIL/Functions/CAPLfunctionILNodeResetPDUTimingCyclic.htm",l:-1,t:"ILNodeResetPDUTimingCyclic",i:5.0790874216857E-05,a:"CAPL Functions  »  CANoe IL  » ILNodeResetPDUTimingCyclic ILNodeResetPDUTimingCyclic   Function Syntax long ILNodeResetPDUTimingCyclic (dbMsg dbMessage, long TrueOrFalse) Description Resets the cyclic-timing to the values from the database. Possibly two timings (False and True) exist in parallel and ..."},"8177":{y:0,u:"../Content/Topics/CAPLFunctions/MapWindowAPI/Functions/CAPLfunctionSetMapObjectLineColor.htm",l:-1,t:"SetMapObjectLineColor",i:5.55042100380523E-05,a:"CAPL Functions  »  Map Window API  » SetMapObjectLineColor SetMapObjectLineColor   Function Syntax long SetMapObjectLineColor( long handle, float lineColor ); Description Sets the line color of a map object. Parameters Return Values 0 if success, else the set went wrong Example Availability  "},"8178":{y:0,u:"../Content/Topics/CAPLFunctions/Sensor/Functions/CAPLfunctionResetSignalPolarity.htm",l:-1,t:"ResetSignalPolarity",i:6.12619875133155E-05,a:"CAPL Functions  »  Sensor  » ResetSignalPolarity ResetSignalPolarity   Method  Syntax SensorErrorCode sysvarSensorNamespace.ResetSignalPolarity(); Description Resets the signal polarity of a simulated sensor to the initially configured value. Parameters — Return Values Returns a  SensorErrorCode . ..."},"8179":{y:0,u:"../Content/Topics/CAPLFunctions/DistributedObjects/Methods/CAPLfunctiondistObjBlueprintAddVirtualNetwork.htm",l:-1,t:"distObjBlueprint::AddVirtualNetwork",i:7.17816517754894E-05,a:"CAPL Functions  »  Distributed Objects  » distObjBlueprint::AddVirtualNetwork distObjBlueprint::AddVirtualNetwork   Method  Syntax void  distObjBlueprint  *::AddVirtualNetwork(char networkPath[]); void  distObjBlueprint  *::AddVirtualNetwork(virtNet network); Description Adds a virtual network to ..."},"8180":{y:0,u:"../Content/Topics/CAPLFunctions/Other/Functions/CAPLfunctionStartDOReplayFile.htm",l:-1,t:"StartDOReplayFile",i:6.37673229813994E-05,a:"CAPL Functions  »  General  »  Function Overview  » StartDOReplayFile StartDOReplayFile   Function Syntax dword StartDOReplayFile (char filename[]); // form 1 dword StartDOReplayFile (char filename[], dword role); // form 2 dword StartDOReplayFile (char filename[], dword role, dword ..."},"8181":{y:0,u:"../Content/Topics/CAPLFunctions/IP/Methods/CAPLfunctionProtocolOptionalStructureInit.htm",l:-1,t:"ethernetPacket::protocol::optional-structure::Init",i:0.000121756216207276,a:"CAPL Functions  »  Ethernet  »  Function Overview  » ethernetPacket::protocol::optional-structure::Init ethernetPacket::protocol::optional-structure::Init   Method  Syntax long  ethernetPacket .\u003c protocol \u003e.\u003coptional-structure\u003e.Init(); Description \nAdd a protocol option for a specific protocol to ..."},"8182":{y:0,u:"../Content/Topics/CAPLFunctions/CAN/CAPLfunctionsCANOverview.htm",l:-1,t:"CAN CAPL Functions",i:0.00298511392398874,a:"CAPL Functions  » CAN CAPL Functions CAN CAPL Functions   ON THIS PAGE: Bus Statistics  [▲ back] CANdb API  [▲ back] Event Procedures [▲ back] General Functions  [▲ back] Hardware API  [▲ back] Selectors  [▲ back] Statistics API  [▲ back] CANstress CAPL Functions"},"8183":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/Data/DataWindowColumns.htm",l:-1,t:"Columns (Data Window)",i:0.000191236384002076,a:" CANoe  » … »  Data Window  » Columns Columns   You can use the context menu of the table head to configure how columns are displayed. You can configure the following columns: The Adapt Column Width/Best Fit (All Columns) context menu command allows you to adjust all column widths to the width of ..."},"8184":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939InteractionLayer/Functions/CAPLfunctionJ1939ILDelayTxTpAbort.htm",l:-1,t:"J1939ILDelayTxTpAbort",i:5.84788456228857E-05,a:"CAPL Functions  »  J1939  »  J1939 IL  » J1939ILDelayTxTpAbort J1939ILDelayTxTpAbort   Function Syntax long J1939ILDelayTxTpAbort( long timeout); //Form 1 long J1939ILDelayTxTpAbort( dbNode node, long timeout); //Form 2 Description Delays transmitting of the TP.Abort message generated and sent by ..."},"8185":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestGetWaitLinReceiveErrData.htm",l:-1,t:"TestGetWaitLinReceiveErrData",i:0.000119288611712843,a:"CAPL Functions  »  Test Feature Set  » TestGetWaitLinReceiveErrData TestGetWaitLinReceiveErrData   Function Syntax long TestGetWaitLinReceiveErrData (linReceiveError apEvent); // form 1 long TestGetWaitLinReceiveErrData (dword index, linReceiveError apEvent); // form 2 Description If LIN Receive ..."},"8186":{y:0,u:"../Content/Topics/CAPLFunctions/Test/Functions/CAPLfunctionTestCaseComment.htm",l:-1,t:"TestCaseComment",i:4.95768150675447E-05,a:"CAPL Functions  »  Test Feature Set  » TestCaseComment TestCaseComment   Function Syntax TestCaseComment (char aComment[]); TestCaseComment (char aComment[], message aMsg); TestCaseComment (char aComment[], mostMessage aMsg); TestCaseComment (char aComment[], mostAmsMessage aMsg); TestCaseComment ..."},"8187":{y:0,u:"../Content/Topics/CAPLFunctions/TCPIPAPI/CAPLfunctionsTCPIPSocketOptionsSOL_Vector.htm",l:-1,t:"Socket Options: SOL_VECTOR",i:3.72701313130743E-05,a:"CAPL Functions  »  TCP/IP API  »  Socket Options  » SOL_VECTOR Socket Options: SOL_VECTOR   The following socket options can be set at the SOL_VECTOR option level in CAPL. They influence the behavior of the socket. For all BOOL typed options a non-zero value will be interpreted as TRUE. Stacks C: ..."},"8188":{y:0,u:"../Content/Topics/CAPLFunctions/J1939/J1939NodeLayer/Functions/CAPLfunctionJ1939ECUGoOnline.htm",l:-1,t:"J1939ECUGoOnline",i:3.68791256684101E-05,a:"CAPL Functions  »  J1939  »  J1939 NL  » J1939ECUGoOnline J1939ECUGoOnline   Function Syntax dword J1939ECUGoOnline( dword ecuHandle, dword newAddress ); Description After this function has been called, the logical ECU logs on onto the CAN bus. It must be called separately for each logical ECU. If ..."},"8189":{y:0,u:"../Content/Topics/CAPLFunctions/CANopen/NodeLayerTFS/Functions/CAPLfunctionCoTfsLssWaitForIdentifyNonConfRemoteSlaveReq.htm",l:-1,t:"coTfsLssWaitForIdentifyNonConfRemoteSlaveRequest",i:3.6274081724292E-05,a:"CAPL Functions  »  CANopen  »  Test Feature Set Node Layer  » coTfsLssWaitForIdentifyNonConfRemoteSlaveRequest coTfsLssWaitForIdentifyNonConfRemoteSlaveRequest (Level 2)   Function Syntax long coTfsLssWaitForIdentifyNonConfRemoteSlaveRequest( void ); Description This function waits for an Identify ..."},"8190":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/j1939basics/defineCommRelations.htm",l:-1,t:"Define Communication Relationships",i:7.40284301362996E-05,a:"CANoe  »  J1939  »  Define a J1939 Database  » Define Communication Relationships Define Communication Relationships   The setup of communication relationships is absolutely necessary for the definition of a network and the code generation. Here it is specified which messages are sent and received ..."},"8191":{y:0,u:"../Content/Topics/CAPLFunctions/Security/Functions/CAPLfunctionX509CertificateGetSerialNo.htm",l:-1,t:"X509Certificate_GetSerialNo",i:6.41810845781887E-05,a:"CAPL Functions  »  Security  » X509Certificate_GetSerialNo X509Certificate_GetSerialNo   Method  Syntax dword X509Certificate_GetSerialNo(qword objectHandle, byte[] outBuffer, dword outBufferLength) Description Getter function for the Serial Number field of the X.509 Certificate handle. Parameters ..."},"8192":{y:0,u:"../Content/Topics/Shared/CAPL/General/64BitDatatypes.htm",l:-1,t:"64 Bit Data Types",i:3.13804173653815E-05,a:"CAPL Introduction  »  Data Types for Variables  » 64 Bit Data Types 64 Bit Data Types   Generally, these data types can be used in exactly the same way as all other integer types. int64 : A signed 64-bit integer type qword: An unsigned 64-bit integer type Unlike C/C++ but consistent with a feature ..."},"8193":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILfsclosefile.htm",l:-1,t:"Iso11783IL_FSCloseFile",i:3.67775937289007E-05,a:"CAPL Functions  »  ISO11783  »  ISO11783 Interaction Layer   » Iso11783IL_FSCloseFile Iso11783IL_FSCloseFile   Function Syntax long Iso11783IL_FSCloseFile( dword fileHandle ); Description This function closes an opened file or directory. Parameters Return Values Example Availability  "},"8194":{y:0,u:"../Content/Topics/CAPLFunctions/IP/SOMEIPIL/Functions/CAPLfunctionSomeIpSetValueDWord.htm",l:-1,t:"SomeIpSetValueDWord",i:7.09327169918324E-05,a:"CAPL Functions  »  Ethernet  »  SOME/IP IL  » SomeIpSetValueDWord SomeIpSetValueDWord   Function Syntax long SomeIpSetValueDWord( dword objectHandle, char valuePath[], dword value ); Description This function can be used to set a raw value in the object specified in the objectHandle parameter. The ..."},"8195":{y:0,u:"../Content/Topics/CANoeCANalyzer/Diagnostics/DiagISOTPconfig/DiagSettings/DiagDescTL.htm",l:-1,t:"Transport Layer (CAN)",i:7.86825689083924E-05,a:"Diagnostics with CANoe  »  Functional Overview  »  Protocol Settings  » Transport Layer (CAN) Transport Layer (CAN) Ribbon :  Diagnostics \u0026 XCP Tab | Diagnostics/ISO TP Configuration | Administrate Diagnostic Descriptions |Assignments|Transport Layer (CAN) Parameters from diagnostic description for ..."},"8196":{y:0,u:"../Content/Topics/CANoeCANalyzer/J1939/blocks/diagmonitor/dmTabActiveDTC.htm",l:-1,t:"Active DTC",i:0.000163845230351164,a:"J1939  »  J1939 DTC Monitor  » Active DTC Active DTC   The page Active DTC of the J1939 DTC Monitor shows the error codes that were transmitted in the last received diagnostic message 1 (active error codes).  "},"8197":{y:0,u:"../Content/Topics/vCDL/Language/vCDLEndPoints.htm",l:-1,t:"Endpoints (vCDL)",i:9.5764127584285E-05,a:" CANoe  »  vCDL  »  vCDL 1.4  »  Language  » Endpoints Endpoints   Endpoints identify the communication endpoints of a Service, Signal or PDU. Their type (and keyword) depends on the communication pattern used by the communication object: it will be consumer and provider for service oriented ..."},"8198":{y:0,u:"../Content/Topics/CAPLFunctions/J1587/Functions/CAPLfunctionJ1587SetJ1587TP.htm",l:-1,t:"setJ1587TP",i:8.45201029758321E-05,a:"CAPL Functions  »  J1587  » setJ1587TP setJ1587TP   Function Syntax void setJ1587TP( j1587Param param, dword mode ); Description Selects the setting for the  transport protocol  to use when sending a J1587 parameter via the output function. Parameters Return Values — Example — Availability  "},"8199":{y:0,u:"../Content/Topics/CANoeCANalyzer/VisualSequencer/VSCommands/VSCommandWait.htm",l:-1,t:"Wait (Visual Sequencer Command)",i:5.3077796985521E-05,a:"Visual Sequencer  »  Commands  » Wait Wait   Description Waits a specified length of time. Objects Operators Operands — Example Availability  "},"8200":{y:0,u:"../Content/Topics/SampConf/CAN/CANoe/Scope/BitmaskAnalysisCANxl.htm",l:-1,t:"Bitmask Analysis (CAN XL - Scope)",i:6.6669751070761E-05,a:" CANoe  »  Sample Configurations  »  CAN  » Scope » Bitmask Analysis (CAN XL - Scope) Bitmask Analysis (CAN XL - Scope)   Introduction The sample configuration can only be used in real mode. This requires a VN1670 with current CAN XL driver and a PicoScope purchased from Vector. You can perform a ..."},"8201":{y:0,u:"../Content/Topics/CAPLFunctions/Media/Properties/CAPLfunctionAudioChannelMask.htm",l:-1,t:"AudioChannelMask",i:3.21571136471415E-05,a:"CAPL Functions  »  Media API  »  Properties  » AudioChannelMask AudioChannelMask   Property AudioChannelMask Description In an audio media type, specifies the assignment of audio channels to speaker positions. Data Type dword The value of this property is a bitwise OR of the following flags. ..."},"8202":{y:0,u:"../Content/Topics/CANoeCANalyzer/LIN/LINProtocols/SAEJ2602v2012.htm",l:-1,t:"SAE J2602:2012 (LIN Protocol)",i:5.33060832280692E-05,a:"LIN  » Protocol » SAE J2602:2012 SAE J2602:2012 (LIN Protocol)   Support of LIN Protocol version SAE J2602:2012 Simulation  and  Analysis  of an SAE J2602:2012 network Direct Support of SAE J2602:2012  LDF Files Support of SAE J2602:2012 NCF Files for  Slave Conformance Tests Support of SAE ..."},"8203":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/Functions/CAPLfunctionMOSTAsNTFFunctionCheck.htm",l:-1,t:"mostAsNtfFunctionCheck",i:8.48558252164667E-05,a:"CAPL Functions  »  MOST  » mostAsNtfFunctionCheck mostAsNtfFunctionCheck   Function Syntax long mostAsNtfFunctionCheck(long deviceID, long fblockID, \n long instID, long functionID); Description Checks whether a notification client (deviceID) is registered in the notification matrix for a function. ..."},"8204":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclAbstractSubscribeField.htm",l:-1,t:"cclAbstractSubscribeField",i:3.86360090043396E-05,a:" CANoe  »  C Library API  »  Functions  » cclAbstractSubscribeField cclAbstractSubscribeField   Function Syntax int32_t cclAbstractSubscribeField(cclConsumedFieldID consumedFieldID); Description Subscribes a consumer side service field port for a field. Parameters Return Values Example Availability ..."},"8205":{y:0,u:"../Content/Topics/CLibraryAPI/Functions/CAPLfunctioncclSomeIPSetEventGroupSubscribedHandler.htm",l:-1,t:"cclSomeIPSetEventGroupSubscribedHandler",i:3.86360090043396E-05,a:" CANoe  »  C Library API  »  Functions  » cclSomeIPSetEventGroupSubscribedHandler cclSomeIPSetEventGroupSubscribedHandler   Function Syntax typedef void(*cclSomeIPEventGroupSubscriptionHandler)(cclSomeIPProvidedEventGroupID providedEventGroupID);  int32_t ..."},"8206":{y:0,u:"../Content/Topics/CAPLFunctions/CANoeIL/Functions/CAPLfunctionILControlSimulationOff.htm",l:-1,t:"ILControlSimulationOff",i:9.55685206364941E-05,a:"CAPL Functions  »  CANoe IL  » ILControlSimulationOff ILControlSimulationOff   Function Syntax long ILControlSimulationOff() Description The simulation of the IL is stopped. After that no other function to \n control the IL has an effect to the IL. To restart the simulation of the IL use  ..."},"8207":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILsetmsgdelaytime.htm",l:-1,t:"Iso11783IL_SetMsgDelayTime",i:3.67775937289007E-05,a:"CAPL Functions  »  ISO11783  »  ISO11783 Interaction Layer   » Iso11783IL_SetMsgDelayTime Iso11783IL_SetMsgDelayTime   Function Syntax long Iso11783IL_SetMsgDelayTime( dbMsg dbMessage, dword delayTime ); Description Sets the message delay time in ms. Parameters Return Values Example — Availability  "},"8208":{y:0,u:"../Content/Topics/CAPLFunctions/MOST/Functions/CAPLfunctionMOSTGenerateBusloadAsync.htm",l:-1,t:"mostGenerateBusloadAsync",i:7.32907432087795E-05,a:"CAPL Functions  »  MOST  » mostGenerateBusloadAsync mostGenerateBusloadAsync   Function Syntax long mostGenerateBusloadAsync (long channel, long pkts); Description The function sends cyclical packets to the asynchronous channel. Use the  mostConfigureBusloadAsync()  or  mostSetStressNodeParameter()  ..."},"8209":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/Filter/IPFilterPagePacketFilter.htm",l:-1,t:"IP Filter: Packet Filter",i:5.99750557405814E-05,a:"IP Filter  » Packet Filter IP Filter: Packet Filter   On the Packet Filter page you can configure filter conditions for the protocol fields of Ethernet packets. The protocol fields in which address and numeric values may be input are configurable here. You can enter the values for the protocol ..."},"8210":{y:0,u:"../Content/Topics/CANoeCANalyzer/FunctionBlocks/Trigger/TriggerModeSingle.htm",l:-1,t:"Trigger Mode: Single Trigger",i:5.83080689079497E-05,a:"Trigger Configuration  »  Trigger Mode Single Trigger Trigger Mode: Single Trigger   In the Single Trigger trigger \n mode all those data occurring before and after a specific trigger is logged. You can enter the necessary settings for pre-trigger and post-trigger times in the Time section, and the ..."},"8211":{y:0,u:"../Content/Topics/COMInterface/Objects/COMObjectERTNodeConfiguration.htm",l:-1,t:"ERTNodeConfiguration (COM Object)",i:3.7838667963145E-05,a:" CANoe  »  COM Interface  »  Objects  » ERTNodeConfiguration ERTNodeConfiguration Application  »  Configuration  »  SimulationSetup  »  Nodes »  Node  » ERTNodeConfiguration Description The ERTNodeConfiguration object represents the ERT specific configuration of an ERT network node. Properties ..."},"8212":{y:0,u:"../Content/Topics/SampConf/Car2x/CANoe/C2xDay1Scenarios.htm",l:-1,t:"Car2x Application Testing - Day 1 Scenarios ",i:3.15507036040119E-05,a:"Sample Configurations  »  Car2x  » Car2x Application Testing - Day 1 Scenarios  Car2x Application Testing - Day 1 Scenarios    Introduction At the start of the measurement, the system switches to the desktop Measurement and simulates an Ego vehicle driving on a predefined sample route and its Car2x ..."},"8213":{y:0,u:"../Content/Topics/SampConf/CANopen/CANoe/BatteryCharger/BattCharOverview.htm",l:-1,t:"Battery Charger",i:6.12216789171715E-05,a:"Sample Configurations  »  CANopen  » Battery Charger Battery Charger   The sample configuration simulates a much simplified battery charger \n according to CiA418/419. The simulation was created by the simulation \n generator and then extended by the application code. This sample configuration should ..."},"8214":{y:0,u:"../Content/Topics/SampConf/Ethernet/CANoe/UDPNMBasicAutosar/UDPNMBasicAutosarCN.htm",l:-1,t:"Basic AUTOSAR UDP Network Management",i:4.99439537155258E-05,a:"Sample Configurations  »  Ethernet  »  Basic AUTOSAR UDP Network Management   ARXML contains the network description for four nodes that use the UDP NM and each send a PDU cyclically. Two partial networks are used. The VGW node wakes all other nodes; the HU node only wakes the AMP. Introduction At ..."},"8215":{y:0,u:"../Content/Topics/CAPLFunctions/LIN/Functions/CAPLfunctionLINActivateFlashMode.htm",l:-1,t:"linActivateFlashMode",i:6.10249516374739E-05,a:"CAPL Functions  »  LIN  » linActivateFlashMode linActivateFlashMode   Function Syntax dword linActivateFlashMode(byte activate); Description This function activates flash mode on high-speed capable transceivers. Note that in flash mode such a transceiver will use faster rising and falling edges and ..."},"8216":{y:0,u:"../Content/Topics/CANoeCANalyzer/VisualSequencer/VSCommands/VSCommandMap.htm",l:-1,t:"Map (Visual Sequencer Command)",i:3.30034756204266E-05,a:"Visual Sequencer  »  Commands  » Map Map   Description The Map command maps system variables to other system variables or signals. Value changes of the source variable are written to the target variable immediately. The value mapping to the target variable is valid as long as the measurement is ..."},"8217":{y:0,u:"../Content/Topics/TestCommands/CheckDescriptions/CDBurstTimeLimit.htm",l:-1,t:"Burst Time Limit (Check Description)",i:4.3059606819438E-05,a:" CANoe  »  Check Descriptions  »  Time Evaluation  » Burst Time Limit Burst Time Limit   Description This check observes the maximum burst time on a bus. Only bursts (frames which are directly consecutive) are observed. Check-specific Statistic Data in Report This check can report the following  ..."},"8218":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/ProtocolMonitor/ProtocolMonitorConcept.htm",l:-1,t:"Concept (Protocol Monitor)",i:5.8080010522039E-05,a:" CANoe  » … »  Protocol Monitor  » Concept Concept   Most protocols, such as those in the TCP/IP reference model, follow a layered architecture (cf. ISO/OSI reference model). Each layer has a specific task, from pure bit transmission to the transmission of application data, and thus provides the ..."},"8219":{y:0,u:"../Content/Topics/CANoeCANalyzer/Windows/Graphics/GraphicsDiagramSearch.htm",l:-1,t:"Graphics Window: Search",i:4.01521421916094E-05,a:"Graphics Window  »  Diagram  » Searching for Values Graphics Window: Search Context Menu of the  Diagram : Search... You can search for values as well as the Minimum and Maximum of  symbols  in the Graphics Window. Symbol Name Shown in the selection list are the names of all symbols that are ..."},"8220":{y:0,u:"../Content/Topics/SampConf/ARINC825/CANaeroBasicGalleySystemCN.htm",l:-1,t:"CANaero Basic Galley System (ARINC-825 Sample Configuration)",i:3.93705104727567E-05,a:"Sample Configurations  »  ARINC-825  » CANaero Basic Galley System  CANaero Basic Galley System    This more complex configuration consists of several  desktops  with a whole series of  panels . They show the communication within an airplane galley (galley insert; ARINC-812-1; 2006-12-29). The ..."},"8221":{y:0,u:"../Content/Topics/CAPLFunctions/ISO11783/ISOInteractionLayer/Functions/CAPLfunctionIso11783ILOpOnError.htm",l:-1,t:"Iso11783IL_OPOnError",i:0.000283431241422457,a:"CAPL Functions  »  ISO11783   »  ISO11783 Interaction Layer   » Iso11783IL_OPOnError Iso11783IL_OPOnError   Function Syntax void Iso11783IL_OPOnError( long error, dword vtFunction ); Description The function is called by the node layer, when the object pool detects an error. Parameters Return Values ..."},});