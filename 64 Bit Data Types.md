# 64 Bit Data Types

**Navigation:**  
[CAPL Introduction](../CAPLIntroduction.htm) » [Data Types for Variables](DataTypesForVariables.htm) » **64 Bit Data Types**

### Tool Availability
Valid for:
- CANoe DE
- CANoe:lite DE
- CANoe4SW DE
- CANoe4SW:lite DE

---

Generally, these data types can be used in exactly the same way as all other integer types.

- **int64**: A signed 64-bit integer type
- **qword**: An unsigned 64-bit integer type

Unlike C/C++, but consistent with a feature of other CAPL data types, **int64** and **qword** are not case-sensitive.

### Example

```c
Int64 i = 4;  
qWord d1 = 5, d2 = 7;
```

64-bit constant values can be used. These have the suffix **LL**.  
This suffix is not case-sensitive either.

Values **greater than or equal to 2^32** must be annotated with the suffix **LL**, otherwise they will be set to **0xffffffff** (2^32 -1) and a warning will appear.  
Values **less than 2^32** can be annotated with the suffix **LL**. They are then processed as 64-bit values; this enforces 64-bit arithmetic in expressions, for example.

### Example

```c
Int64 i = 0xffffffffffffLL;
qword q = 1123123123123ll;
```

**int64** and **qword** data types can be used for global and local variables. They can also be used as function parameters or function return types.

---

## Write Output

64-bit variables must be provided with a different format string when outputting with `write` or `snprintf`.

The following format strings must be used instead of `%ld` (valid for 32-bit variables):

- `%lld` or `%I64d` for **int64**
- `%llu` or `%I64u` for **qword**

### Example

```c
write("%lld, %lld, %lld, %lld", a, a, a, a);
```

---

### Note

When compiling for **Linux**, the format specifiers `%I64d`, `%I64x`, `%I64X`, `%I64u`, and `%I64o` are **not supported**.  
Use the following instead:

- `%lld`
- `%llx`
- `%llX`
- `%llu`
- `%llo`

---

© Vector Informatik GmbH  
Version 18  
[Contact/Copyright/License](../../ContactCopyrightLicense.htm) | [Data Privacy Notice](https://www.vector.com/int/en/company/get-info/privacy-policy/)