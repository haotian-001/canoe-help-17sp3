define({"1710":{y:0,u:"../Content/html/26184a2c-749d-1a6e-4d20-1c8858b79581.htm",l:-1,t:"IServicePDUCO Properties",i:2.27726454982268E-05,a:"Vector CANoe .NET API The  IServicePDUCO  type exposes the following members. Properties Top See Also Reference IServicePDUCO Interface Vector.CANoe.Runtime Namespace"},"1711":{y:0,u:"../Content/html/c755a4fd-17bc-f574-f1a7-d6c096e36f75.htm",l:-1,t:"IServicePDUPort Interface",i:0.00054113002388655,a:"Vector CANoe .NET API \n            Base interface for service port PDUs providing the PDU state at the port. Instances of\n            these classes can be used in the low level API function for setting subscription state.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n  ..."},"1712":{y:0,u:"../Content/html/3bb25b20-7eb8-b2e7-ca1a-d095585ef6d4.htm",l:-1,t:"IServicePDUPort Properties",i:2.1585114904761E-05,a:"Vector CANoe .NET API The  IServicePDUPort  type exposes the following members. Properties Top See Also Reference IServicePDUPort Interface Vector.CANoe.Runtime Namespace"},"1713":{y:0,u:"../Content/html/f90128f0-5660-0599-60c8-03594433b387.htm",l:-1,t:"IServicePDUPort.Consumer Property ",i:0.000163528832754691,a:"Vector CANoe .NET API \n            Provides access to the consumer of the PDU.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy IServiceConsumer Consumer { get; } ReadOnly Property Consumer As IServiceConsumer Get property ..."},"1714":{y:0,u:"../Content/html/aea65bee-ef4b-d72f-62a6-f703b987e692.htm",l:-1,t:"IServicePDUPort.Provider Property ",i:0.000163528832754691,a:"Vector CANoe .NET API \n            Provides access to the provider of the PDU.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy IServiceProvider Provider { get; } ReadOnly Property Provider As IServiceProvider Get property ..."},"1715":{y:0,u:"../Content/html/c779b660-6777-f212-8e40-7bf27a19f568.htm",l:-1,t:"IServicePDUPort.SubscriptionState Property ",i:0.000163528832754691,a:"Vector CANoe .NET API \n            Provides access to the subscription state of the PDU.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy ITypedValueEntityReadOnly\u003cSubscriptionState\u003e SubscriptionState { get; } ReadOnly Property ..."},"1716":{y:0,u:"../Content/html/4ac51634-1ec0-949a-0026-e62efb7fb48a.htm",l:-1,t:"IServiceProvider Interface",i:0.000949896113251547,a:"Vector CANoe .NET API \n            Interface for provider side end point classes. Besides the provided high level interface, these\n            classes can be used with service discovery handler attribute OnClientDiscovered. Instances of\n            provider classes can further be used in the low ..."},"1717":{y:0,u:"../Content/html/209b2970-5ea4-a620-08c6-ded4e8277ae4.htm",l:-1,t:"IServiceProvider Properties",i:2.13623177260233E-05,a:"Vector CANoe .NET API The  IServiceProvider  type exposes the following members. Properties Top See Also Reference IServiceProvider Interface Vector.CANoe.Runtime Namespace"},"1718":{y:0,u:"../Content/html/8e8f6d1d-07b2-f23d-c331-1d30b216b1fc.htm",l:-1,t:"IServiceProvider.Id Property ",i:0.000130934231366409,a:"Vector CANoe .NET API \n            The provider\u0027s binding specific identifier. This identifier can be used to get access to service\n            ports through GetPort functions.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy long Id { ..."},"1719":{y:0,u:"../Content/html/009b8d0e-af9d-d817-b863-412c09ee8adb.htm",l:-1,t:"IServiceProvider.ServiceState Property ",i:0.000120181128550445,a:"Vector CANoe .NET API \n            Provides access to the current service state of the provider.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy ITypedValueEntityReadOnly\u003cServiceStateProvider\u003e ServiceState { get; } ReadOnly Property ..."},"1720":{y:0,u:"../Content/html/d6bab29b-2cba-d2ea-e341-fa4a69103e4d.htm",l:-1,t:"IServiceProvider Methods",i:2.27726454982268E-05,a:"Vector CANoe .NET API The  IServiceProvider  type exposes the following members. Methods Top See Also Reference IServiceProvider Interface Vector.CANoe.Runtime Namespace"},"1721":{y:0,u:"../Content/html/b97b85ee-d9e1-d94e-2247-646a71c51d4b.htm",l:-1,t:"IServiceProvider.IsServiceProvided Method ",i:0.000132293261545354,a:"Vector CANoe .NET API \n            Returns whether the internal provider model is in state Provided.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy bool IsServiceProvided() Function IsServiceProvided As Boolean bool IsServiceProvided() ..."},"1722":{y:0,u:"../Content/html/b1c47d9a-f09b-e26b-af4e-60fdcf73b794.htm",l:-1,t:"IServiceProvider.ProvideService Method ",i:0.000132293261545354,a:"Vector CANoe .NET API \n            Switches the internal provider model into state Provided which initiates transitions to\n            public transient state Initializing and if no errors occur into state Available.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n  ..."},"1723":{y:0,u:"../Content/html/cf48bd4e-fa68-7227-f687-5bdca22d593d.htm",l:-1,t:"IServiceProvider.ReleaseService Method ",i:0.000132293261545354,a:"Vector CANoe .NET API \n            Switches the internal provider model into state NotProvided which initiates transition to\n            public state Unavailable.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy int ReleaseService() ..."},"1724":{y:0,u:"../Content/html/229270ec-13b3-e7fe-0eab-99c9874bb10f.htm",l:-1,t:"IServiceProviderBase Interface",i:0.000329212909374823,a:"Vector CANoe .NET API \n            Tagging interface for provider side end point classes. It identifies all end points,\n            no matter whether simulated or real. The derived interface IServiceProvider is only implemented\n            by simulated end points.\n             Namespace:   \n    ..."},"1725":{y:0,u:"../Content/html/fdf23a84-bb2f-3d53-4557-baeb0352fbb3.htm",l:-1,t:"IServiceProviderBase Properties",i:2.18702329726561E-05,a:"Vector CANoe .NET API The  IServiceProviderBase  type exposes the following members. Properties Top See Also Reference IServiceProviderBase Interface Vector.CANoe.Runtime Namespace"},"1726":{y:0,u:"../Content/html/f3ce762b-baef-3504-c635-09887fb4f7c6.htm",l:-1,t:"IServiceProviderMeasured Interface",i:0.000326323934067179,a:"Vector CANoe .NET API \n            Interface for provider side measurement end point classes. A measurement point\n            provides read-only access to the provider state, it is similar to a provider\n            side end-point but doesn\u0027t allow to initiate or revoke service discovery.\n            ..."},"1727":{y:0,u:"../Content/html/4ef313e7-5eba-5278-8696-948478c2850b.htm",l:-1,t:"IServiceProviderMeasured Properties",i:2.13623177260233E-05,a:"Vector CANoe .NET API The  IServiceProviderMeasured  type exposes the following members. Properties Top See Also Reference IServiceProviderMeasured Interface Vector.CANoe.Runtime Namespace"},"1728":{y:0,u:"../Content/html/899e0464-7ae4-b0d0-8356-db127c0764b7.htm",l:-1,t:"IServiceProviderMeasured.Id Property ",i:5.21814664526774E-05,a:"Vector CANoe .NET API \n            The provider\u0027s binding specific identifier. This identifier can be used to get access to service\n            ports through GetPort functions.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy long Id { ..."},"1729":{y:0,u:"../Content/html/846a7871-2c55-98c5-5878-acaa4db1ae1e.htm",l:-1,t:"IServiceProviderMeasured.ServiceState Property ",i:5.21814664526774E-05,a:"Vector CANoe .NET API \n            Provides access to the current service state of the provider.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy ITypedValueEntityReadOnly\u003cServiceStateProvider\u003e ServiceState { get; } ReadOnly Property ..."},"1730":{y:0,u:"../Content/html/0639515f-b2ce-5dc8-2f2b-d39daee45050.htm",l:-1,t:"IServiceProviderRef Interface",i:0.000415960827852007,a:"Vector CANoe .NET API \n            A reference to a provider side service end-point.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface IServiceProviderRef : IServiceProvider, \n\tIServiceProviderBase, IEndPointBase, ..."},"1731":{y:0,u:"../Content/html/2beeac14-639d-005a-ac59-c56421befc2c.htm",l:-1,t:"IServiceProviderRef Properties",i:2.08099840357687E-05,a:"Vector CANoe .NET API The  IServiceProviderRef  type exposes the following members. Properties Top See Also Reference IServiceProviderRef Interface Vector.CANoe.Runtime Namespace"},"1732":{y:0,u:"../Content/html/6ea67085-e6aa-bb7e-166f-1ec6358bce11.htm",l:-1,t:"IServiceProviderRef Methods",i:2.05752849676962E-05,a:"Vector CANoe .NET API The  IServiceProviderRef  type exposes the following members. Methods Top See Also Reference IServiceProviderRef Interface Vector.CANoe.Runtime Namespace"},"1733":{y:0,u:"../Content/html/d771ad1f-ddcb-fffd-c3de-9a72b9d0ba77.htm",l:-1,t:"IServiceProviderRef.Clone Method ",i:4.32313639626227E-05,a:"Vector CANoe .NET API \n            Creates a copy of this object, which then selects the same provider.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy IServiceProviderRef Clone() Function Clone As IServiceProviderRef ..."},"1734":{y:0,u:"../Content/html/df86a3a4-41b7-9ab6-d564-8ffbdaec67dc.htm",l:-1,t:"IServiceProviderRef.SetService Method ",i:4.4974961464862E-05,a:"Vector CANoe .NET API \n            Switches the currently selected service.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy void SetService(\n\tstring servicePath\n) Sub SetService ( \n\tservicePath As String\n) void SetService(\n\tString^ ..."},"1735":{y:0,u:"../Content/html/17662bf1-ed63-2491-75ff-203f8acb962f.htm",l:-1,t:"ISignalCO Interface",i:0.000317649508078409,a:"Vector CANoe .NET API \n            Tagging interface for signal communication object classes.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISignalCO : ICOBase, \n\tISignalCO Public Interface ISignalCO Inherits ICOBase, ..."},"1736":{y:0,u:"../Content/html/d27bf83a-adce-dcf3-f988-931ec79bb077.htm",l:-1,t:"ISignalCO Properties",i:2.27726454982268E-05,a:"Vector CANoe .NET API The  ISignalCO  type exposes the following members. Properties Top See Also Reference ISignalCO Interface Vector.CANoe.Runtime Namespace"},"1737":{y:0,u:"../Content/html/e23fcde9-0a65-711c-7c40-6e3c22a35919.htm",l:-1,t:"ISignalConsumer Interface",i:0.000299061491126163,a:"Vector CANoe .NET API \n            Tagging interface for signal consumer end points, used in context selection.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISignalConsumer : IEndPointBase, \n\tIPortBase, ..."},"1738":{y:0,u:"../Content/html/ee62f5f7-2de6-2e6b-1d82-0910aa4a61ef.htm",l:-1,t:"ISignalConsumer Properties",i:2.18702329726561E-05,a:"Vector CANoe .NET API The  ISignalConsumer  type exposes the following members. Properties Top See Also Reference ISignalConsumer Interface Vector.CANoe.Runtime Namespace"},"1739":{y:0,u:"../Content/html/39b6f37c-02bc-50bb-4e8b-6904054e4960.htm",l:-1,t:"ISignalConsumerRef Interface",i:0.000360897810273453,a:"Vector CANoe .NET API \n            A reference to a consumer side signal end-point.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISignalConsumerRef : ISignalConsumer, \n\tIEndPointBase, IPortBase, ISignalEndPoint, ..."},"1740":{y:0,u:"../Content/html/77a595d4-3fdd-c7c0-6d7b-01d640c3f2e4.htm",l:-1,t:"ISignalConsumerRef Properties",i:2.11834214692044E-05,a:"Vector CANoe .NET API The  ISignalConsumerRef  type exposes the following members. Properties Top See Also Reference ISignalConsumerRef Interface Vector.CANoe.Runtime Namespace"},"1741":{y:0,u:"../Content/html/b092a037-e345-d9bf-4a15-ac61d096c160.htm",l:-1,t:"ISignalConsumerRef Methods",i:2.09139727860945E-05,a:"Vector CANoe .NET API The  ISignalConsumerRef  type exposes the following members. Methods Top See Also Reference ISignalConsumerRef Interface Vector.CANoe.Runtime Namespace"},"1742":{y:0,u:"../Content/html/9a905888-d59c-77b7-9ef5-a1951b51d08a.htm",l:-1,t:"ISignalConsumerRef.Clone Method ",i:3.70592372914305E-05,a:"Vector CANoe .NET API \n            Creates a copy of this object, which then selects the same consumer.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy ISignalConsumerRef Clone() Function Clone As ISignalConsumerRef ISignalConsumerRef^ ..."},"1743":{y:0,u:"../Content/html/6e7291e6-9d8d-8140-d801-4700ff7d9761.htm",l:-1,t:"ISignalConsumerRef.SetSignal Method ",i:5.2562424084062E-05,a:"Vector CANoe .NET API \n            Switches the currently selected signal.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy void SetSignal(\n\tstring signalPath\n) Sub SetSignal ( \n\tsignalPath As String\n) void SetSignal(\n\tString^ ..."},"1744":{y:0,u:"../Content/html/f9cafb22-b6b0-a404-5719-0b35426f2107.htm",l:-1,t:"ISignalProvider Interface",i:0.000299061491126163,a:"Vector CANoe .NET API \n            Tagging interface for signal provider end points, used in context selection.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISignalProvider : IEndPointBase, \n\tIPortBase, ..."},"1745":{y:0,u:"../Content/html/e57469c5-e808-4d51-b6e3-734962d9f51b.htm",l:-1,t:"ISignalProvider Properties",i:2.18702329726561E-05,a:"Vector CANoe .NET API The  ISignalProvider  type exposes the following members. Properties Top See Also Reference ISignalProvider Interface Vector.CANoe.Runtime Namespace"},"1746":{y:0,u:"../Content/html/df05fc7b-1d42-11b1-125c-85e96299de6a.htm",l:-1,t:"ISignalProviderRef Interface",i:0.000360897810273453,a:"Vector CANoe .NET API \n            A reference to a provider side signal end-point.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISignalProviderRef : ISignalProvider, \n\tIEndPointBase, IPortBase, ISignalEndPoint, ..."},"1747":{y:0,u:"../Content/html/ea7aee6b-de73-da61-cc4b-5b50f8008c13.htm",l:-1,t:"ISignalProviderRef Properties",i:2.11834214692044E-05,a:"Vector CANoe .NET API The  ISignalProviderRef  type exposes the following members. Properties Top See Also Reference ISignalProviderRef Interface Vector.CANoe.Runtime Namespace"},"1748":{y:0,u:"../Content/html/712564ce-154b-0572-45bc-dd0c2b480dca.htm",l:-1,t:"ISignalProviderRef Methods",i:2.09139727860945E-05,a:"Vector CANoe .NET API The  ISignalProviderRef  type exposes the following members. Methods Top See Also Reference ISignalProviderRef Interface Vector.CANoe.Runtime Namespace"},"1749":{y:0,u:"../Content/html/0c398521-3bd3-8b38-1d3a-1db27efb86ab.htm",l:-1,t:"ISignalProviderRef.Clone Method ",i:3.70592372914305E-05,a:"Vector CANoe .NET API \n            Creates a copy of this object, which then selects the same provider.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy ISignalProviderRef Clone() Function Clone As ISignalProviderRef ISignalProviderRef^ ..."},"1750":{y:0,u:"../Content/html/c84716da-630a-7690-8eb0-ed2950c3f3ed.htm",l:-1,t:"ISignalProviderRef.SetSignal Method ",i:5.2562424084062E-05,a:"Vector CANoe .NET API \n            Switches the currently selected signal.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy void SetSignal(\n\tstring signalPath\n) Sub SetSignal ( \n\tsignalPath As String\n) void SetSignal(\n\tString^ ..."},"1751":{y:0,u:"../Content/html/e37a107b-c03a-089e-1413-ab48b729fbad.htm",l:-1,t:"ISignalReceiver Interface",i:0.000299061491126163,a:"Vector CANoe .NET API \n            Tagging interface for signal receiver end points, used in context selection.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISignalReceiver : IEndPointBase, \n\tIPortBase, ..."},"1752":{y:0,u:"../Content/html/247c1022-d255-a68c-7cf5-c9552bd1da74.htm",l:-1,t:"ISignalReceiver Properties",i:2.18702329726561E-05,a:"Vector CANoe .NET API The  ISignalReceiver  type exposes the following members. Properties Top See Also Reference ISignalReceiver Interface Vector.CANoe.Runtime Namespace"},"1753":{y:0,u:"../Content/html/7e427354-e370-7c4d-395e-fd70e2c71f30.htm",l:-1,t:"ISignalReceiverRef Interface",i:0.000367893065861892,a:"Vector CANoe .NET API \n            A reference to a receiver side signal end-point.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISignalReceiverRef : ISignalReceiver, \n\tIEndPointBase, IPortBase, ISignalEndPoint, ..."},"1754":{y:0,u:"../Content/html/ddc79f09-20e4-bfb1-4bcc-84fad48e562a.htm",l:-1,t:"ISignalReceiverRef Properties",i:2.11834214692044E-05,a:"Vector CANoe .NET API The  ISignalReceiverRef  type exposes the following members. Properties Top See Also Reference ISignalReceiverRef Interface Vector.CANoe.Runtime Namespace"},"1755":{y:0,u:"../Content/html/30eb15cf-4b97-de24-678e-834c201645d2.htm",l:-1,t:"ISignalReceiverRef Methods",i:2.09139727860945E-05,a:"Vector CANoe .NET API The  ISignalReceiverRef  type exposes the following members. Methods Top See Also Reference ISignalReceiverRef Interface Vector.CANoe.Runtime Namespace"},"1756":{y:0,u:"../Content/html/459b4f4a-605f-7b55-6af6-49100382998d.htm",l:-1,t:"ISignalReceiverRef.Clone Method ",i:3.73721824692406E-05,a:"Vector CANoe .NET API \n            Creates a copy of this object, which then selects the same receiver.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy ISignalReceiverRef Clone() Function Clone As ISignalReceiverRef ISignalReceiverRef^ ..."},"1757":{y:0,u:"../Content/html/62296327-a963-b00d-61c0-fec2ccbadab5.htm",l:-1,t:"ISignalReceiverRef.SetSignal Method ",i:5.2875369261872E-05,a:"Vector CANoe .NET API \n            Switches the currently selected signal.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy void SetSignal(\n\tstring signalPath\n) Sub SetSignal ( \n\tsignalPath As String\n) void SetSignal(\n\tString^ ..."},"1758":{y:0,u:"../Content/html/83da097c-9f89-d983-45a9-e8c4f466c848.htm",l:-1,t:"ISignalSender Interface",i:0.000299061491126163,a:"Vector CANoe .NET API \n            Tagging interface for signal sender end points, used in context selection.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISignalSender : IEndPointBase, \n\tIPortBase, ISignalEndPoint ..."},"1759":{y:0,u:"../Content/html/b19e1a83-9ed2-36e6-80fe-7e5bef183af9.htm",l:-1,t:"ISignalSender Properties",i:2.18702329726561E-05,a:"Vector CANoe .NET API The  ISignalSender  type exposes the following members. Properties Top See Also Reference ISignalSender Interface Vector.CANoe.Runtime Namespace"},"1760":{y:0,u:"../Content/html/1f72ac86-eeed-58ad-d8f2-5a95cb3cf41d.htm",l:-1,t:"ISignalSenderRef Interface",i:0.000367893065861892,a:"Vector CANoe .NET API \n            A reference to a sender side signal end-point.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISignalSenderRef : ISignalSender, \n\tIEndPointBase, IPortBase, ISignalEndPoint, ..."},"1761":{y:0,u:"../Content/html/4ba86519-d4db-7433-5334-c35ab649fe48.htm",l:-1,t:"ISignalSenderRef Properties",i:2.11834214692044E-05,a:"Vector CANoe .NET API The  ISignalSenderRef  type exposes the following members. Properties Top See Also Reference ISignalSenderRef Interface Vector.CANoe.Runtime Namespace"},"1762":{y:0,u:"../Content/html/fc343709-88a7-bde2-628e-1a547afc8370.htm",l:-1,t:"ISignalSenderRef Methods",i:2.09139727860945E-05,a:"Vector CANoe .NET API The  ISignalSenderRef  type exposes the following members. Methods Top See Also Reference ISignalSenderRef Interface Vector.CANoe.Runtime Namespace"},"1763":{y:0,u:"../Content/html/c0e15a33-f8db-37d5-ad8e-6521b629100e.htm",l:-1,t:"ISignalSenderRef.Clone Method ",i:3.73721824692406E-05,a:"Vector CANoe .NET API \n            Creates a copy of this object, which then selects the same sender.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy ISignalSenderRef Clone() Function Clone As ISignalSenderRef ISignalSenderRef^ Clone() ..."},"1764":{y:0,u:"../Content/html/00ec9b12-c5d5-1a46-02d9-06d1b7fdf720.htm",l:-1,t:"ISignalSenderRef.SetSignal Method ",i:5.2875369261872E-05,a:"Vector CANoe .NET API \n            Switches the currently selected signal.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy void SetSignal(\n\tstring signalPath\n) Sub SetSignal ( \n\tsignalPath As String\n) void SetSignal(\n\tString^ ..."},"1765":{y:0,u:"../Content/html/14f7cfa9-e742-21d3-2361-f2c84294c1a1.htm",l:-1,t:"IStructMember Interface",i:0.000472293490564221,a:"Vector CANoe .NET API \n            Additional interface for a member of a system variable struct.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface IStructMember Public Interface IStructMember public interface class ..."},"1766":{y:0,u:"../Content/html/7f627056-7253-4764-cf69-43875c86de66.htm",l:-1,t:"IStructMember Properties",i:2.4820978691189E-05,a:"Vector CANoe .NET API The  IStructMember  type exposes the following members. Properties Top See Also Reference IStructMember Interface Vector.CANoe.Runtime Namespace"},"1767":{y:0,u:"../Content/html/a53a8d0a-0f9e-be4b-964e-82dd2ea13c49.htm",l:-1,t:"IStructMember.IsValid Property ",i:0.000171251008523218,a:"Vector CANoe .NET API \n            Whether the member is valid. In most cases, all members are\n            always valid, but for some variables, members can be optional.\n            If the struct represents a union, only one member of the struct\n            is valid for each value of the struct.\n    ..."},"1768":{y:0,u:"../Content/html/d91a371f-b8ab-fda6-42cb-2498d96f396c.htm",l:-1,t:"ISubscribableField Interface",i:0.000527026392661786,a:"Vector CANoe .NET API \n            Additional interface implemented by field ports with notification.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISubscribableField Public Interface ISubscribableField public ..."},"1769":{y:0,u:"../Content/html/f3d20de7-bc8e-378b-6ee0-8bbb95455bf7.htm",l:-1,t:"ISubscribableField Properties",i:2.4820978691189E-05,a:"Vector CANoe .NET API The  ISubscribableField  type exposes the following members. Properties Top See Also Reference ISubscribableField Interface Vector.CANoe.Runtime Namespace"},"1770":{y:0,u:"../Content/html/12365eae-0341-dacd-ca38-d40de63650cb.htm",l:-1,t:"ISubscribableField.SubscriptionState Property ",i:0.00025144232030655,a:"Vector CANoe .NET API \n            Provides access to the current subscription state of the field.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy ITypedValueEntityReadOnly\u003cSubscriptionState\u003e SubscriptionState { get; } ReadOnly Property ..."},"1771":{y:0,u:"../Content/html/39ff1735-db9e-fefb-613d-9dca4ec498d5.htm",l:-1,t:"ISubscribableFieldProvider Interface",i:0.000525366879618466,a:"Vector CANoe .NET API \n            Additional interface implemented by provider fields with notification\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ISubscribableFieldProvider Public Interface ..."},"1772":{y:0,u:"../Content/html/302a410c-826d-a3d5-0c11-f37eab84dd57.htm",l:-1,t:"ISubscribableFieldProvider Methods",i:2.35500249630257E-05,a:"Vector CANoe .NET API The  ISubscribableFieldProvider  type exposes the following members. Methods Top See Also Reference ISubscribableFieldProvider Interface Vector.CANoe.Runtime Namespace"},"1773":{y:0,u:"../Content/html/5730d886-0e65-4404-4ceb-34855f596539.htm",l:-1,t:"ISubscribableFieldProvider.GetNrOfSubscribedConsumers Method ",i:0.000173688019295035,a:"Vector CANoe .NET API \n            Provides information about how many consumers are currently subscribed for a provider side field.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy uint GetNrOfSubscribedConsumers() Function ..."},"1774":{y:0,u:"../Content/html/22f285cb-37e0-1a1e-4eb9-aa78436b7882.htm",l:-1,t:"ISubscribableFieldProvider.GetSubscribedConsumers Method ",i:0.000170833790164049,a:"Vector CANoe .NET API \n            Lists the currently subscribed consumers of a provider side field.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy IEnumerable\u003cIServiceConsumer\u003e GetSubscribedConsumers() Function GetSubscribedConsumers ..."},"1775":{y:0,u:"../Content/html/36785358-7615-d1c9-0f20-b66e35fefaf5.htm",l:-1,t:"ITxPDU Interface",i:0.000317649508078409,a:"Vector CANoe .NET API \n            Tagging interface for PDU sender ports, used in context selection.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ITxPDU : IPortBase, IPDUPort Public Interface ITxPDU Inherits ..."},"1776":{y:0,u:"../Content/html/0ce9dca0-0af3-4e10-eab2-7e009df48114.htm",l:-1,t:"ITxPDU Properties",i:2.27726454982268E-05,a:"Vector CANoe .NET API The  ITxPDU  type exposes the following members. Properties Top See Also Reference ITxPDU Interface Vector.CANoe.Runtime Namespace"},"1777":{y:0,u:"../Content/html/1b993622-ad9e-721b-b3d6-24e8836aa30f.htm",l:-1,t:"ITxPDURef Interface",i:0.000318298816619317,a:"Vector CANoe .NET API \n            A reference to a sender side PDU port.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ITxPDURef : ITxPDU, \n\tIPortBase, IPDUPort, ICOReferenceBase, IDisposable, ISenderReferenceBase, ..."},"1778":{y:0,u:"../Content/html/4d52edcd-7a29-6902-13ed-12c7142134f4.htm",l:-1,t:"ITxPDURef Properties",i:2.1585114904761E-05,a:"Vector CANoe .NET API The  ITxPDURef  type exposes the following members. Properties Top See Also Reference ITxPDURef Interface Vector.CANoe.Runtime Namespace"},"1779":{y:0,u:"../Content/html/89e233f1-dd5e-ffba-c801-45d0a75a51a1.htm",l:-1,t:"ITxPDURef Methods",i:2.03710637769498E-05,a:"Vector CANoe .NET API The  ITxPDURef  type exposes the following members. Methods Top See Also Reference ITxPDURef Interface Vector.CANoe.Runtime Namespace"},"1780":{y:0,u:"../Content/html/3f68815e-efc0-5873-ad8d-c4f82b4a5f48.htm",l:-1,t:"ITxPDURef.Clone Method ",i:3.11931161336987E-05,a:"Vector CANoe .NET API \n            Creates a copy of this object, which then selects the same port.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy ITxPDURef Clone() Function Clone As ITxPDURef ITxPDURef^ Clone() /* */ Return Value ..."},"1781":{y:0,u:"../Content/html/0381433d-2b99-fc7b-0c4f-28c2167cafbb.htm",l:-1,t:"ITxPDURef.GetPDUReceiver Method ",i:3.11931161336987E-05,a:"Vector CANoe .NET API \n            Creates a copy of the currently selected receiver end-point reference.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy IPDUReceiverRef GetPDUReceiver() Function GetPDUReceiver As IPDUReceiverRef ..."},"1782":{y:0,u:"../Content/html/64732ee0-4f51-d043-5eb7-bf1d6919cf7f.htm",l:-1,t:"ITxPDURef.GetPDUSender Method ",i:3.11931161336987E-05,a:"Vector CANoe .NET API \n            Creates a copy of the currently selected sender end-point reference.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy IPDUSenderRef GetPDUSender() Function GetPDUSender As IPDUSenderRef IPDUSenderRef^ ..."},"1783":{y:0,u:"../Content/html/c59c071c-77ff-4113-65cb-d2f3777223ad.htm",l:-1,t:"ITxPDURef.SetPDU Method ",i:3.11931161336987E-05,a:"Vector CANoe .NET API \n            Switches the currently selected PDU.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy void SetPDU(\n\tstring pduPath\n) Sub SetPDU ( \n\tpduPath As String\n) void SetPDU(\n\tString^ pduPath\n) /* */ Parameters ..."},"1784":{y:0,u:"../Content/html/0604c6a1-d928-15b6-1622-16ccca462d25.htm",l:-1,t:"ITxSignal Interface",i:0.000317649508078409,a:"Vector CANoe .NET API \n            Tagging interface for signal sender ports, used in context selection.\n             Namespace:   \n    Vector.CANoe.Runtime Assembly:\n   Vector.CANoe.Runtime.dll Syntax C# VB C++ Copy public interface ITxSignal : IPortBase, \n\tISignalPort Public Interface ITxSignal ..."},});