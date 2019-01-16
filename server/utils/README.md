## Classes

<dl>
<dt><a href="#CustomApiError">CustomApiError</a> ⇐ <code>ExtendableError</code></dt>
<dd><p>Class representing a CustomApiError</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#HttpStatus">HttpStatus</a></dt>
<dd><p>List of Http Status Codes</p>
</dd>
<dt><a href="#ErrorCodes">ErrorCodes</a></dt>
<dd><p>List of Custom API ErrorCodes</p>
</dd>
</dl>

<a name="CustomApiError"></a>

## CustomApiError ⇐ <code>ExtendableError</code>
Class representing a CustomApiError

**Kind**: global class
**Extends**: <code>ExtendableError</code>

* [CustomApiError](#CustomApiError) ⇐ <code>ExtendableError</code>
    * [new CustomApiError(errCode, [extra])](#new_CustomApiError_new)
    * [.getErrorInfo()](#CustomApiError+getErrorInfo) ⇒ <code>Object</code>
    * [.getHttpStatus()](#CustomApiError+getHttpStatus) ⇒ [<code>HttpStatus</code>](#HttpStatus)

<a name="new_CustomApiError_new"></a>

### new CustomApiError(errCode, [extra])
Creates a CustomApiError object


| Param | Type | Description |
| --- | --- | --- |
| errCode | [<code>ErrorCodes</code>](#ErrorCodes) | the custom api error code |
| [extra] | <code>string</code> | the reason related information |

<a name="CustomApiError+getErrorInfo"></a>

### customApiError.getErrorInfo() ⇒ <code>Object</code>
Get the error info to be passed to client

**Kind**: instance method of [<code>CustomApiError</code>](#CustomApiError)
**Returns**: <code>Object</code> - the error info in json format
<a name="CustomApiError+getHttpStatus"></a>

### customApiError.getHttpStatus() ⇒ [<code>HttpStatus</code>](#HttpStatus)
Get the http status to be passed to client

**Kind**: instance method of [<code>CustomApiError</code>](#CustomApiError)
**Returns**: [<code>HttpStatus</code>](#HttpStatus) - the http status

<a name="HttpStatus"></a>

## HttpStatus
List of Http Status Codes

**Kind**: global constant
<a name="ErrorCodes"></a>

## ErrorCodes
List of Custom API ErrorCodes

**Kind**: global constant

