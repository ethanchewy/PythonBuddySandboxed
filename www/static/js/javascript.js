// Created by Ethan Chiu 2016
// Updated August 4, 2018 for Python 3
// Updated October, 2018 for Dockerized version
const pylint_messages = {
  "C0102": " \r  Occurs when the name is listed in the black list (unauthorized names).\r",
  "C0103": " \r  Occurs when the name doesn't conform to naming rules associated to its type\r  (constant, variable, class...).\r",
  "C0111": " \r  Occurs when a module, function, class or method has no docstring.Some special\r  methods like __init__ doesn't necessary require a docstring.\r",
  "C0112": " \r  Occurs when a module, function, class or method has an empty docstring (it would\r  be too easy ;).\r",
  "C0113": " \r  Occurs when a boolean expression contains an unneeded negation.\r",
  "C0121": " \r  Occurs when an expression is compared to singleton values like True, False or\r  None.\r",
  "C0122": " \r  Occurs when the constant is placed on the left side of a comparison. It is\r  usually clearer in intent to place it in the right hand side of the\r  comparison.\r",
  "C0123": " \r  The idiomatic way to perform an explicit typecheck in Python is to use\r  isinstance(x, Y) rather than type(x) == Y, type(x) is Y. Though there are\r  unusual situations where these give different results.\r",
  "C0200": " \r  Emitted when code that iterates with range and len is encountered. Such code\r  can be simplified by using the enumerate builtin.\r",
  "C0201": " \r  Emitted when the keys of a dictionary are iterated through the .keys() method.\r  It is enough to just iterate through the dictionary itself, as in \"for key in\r  dictionary\".\r",
  "C0202": " \r  Occurs when a class method has a first argument named differently than the value\r  specified in valid-classmethod-first-arg option (default to \"cls\"),\r  recommended to easily differentiate them from regular instance methods.\r",
  "C0203": " \r  Occurs when a metaclass method has a first argument named differently than the\r  value specified in valid-classmethod-first-arg option (default to \"cls\"),\r  recommended to easily differentiate them from regular instance methods.\r",
  "C0204": " \r  Occurs when a metaclass class method has a first argument named differently than\r  the value specified in valid-metaclass-classmethod-first-arg option (default\r  to \"mcs\"), recommended to easily differentiate them from regular instance\r  methods.\r",
  "C0205": " \r  Occurs when a class __slots__ is a simple string, rather than an iterable.\r",
  "C0301": " \r  Occurs when a line is longer than a given number of characters.\r",
  "C0302": " \r  Occurs when a module has too many lines, reducing its readability.\r",
  "C0303": " \r  Occurs when there is whitespace between the end of a line and the newline.\r",
  "C0304": " \r  Occurs when the last line in a file is missing a newline.\r",
  "C0305": " \r  Occurs when there are trailing blank lines in a file.\r",
  "C0321": " \r  Occurs when more than on statement are found on the same line.\r",
  "C0325": " \r  Occurs when a single item in parentheses follows an if, for, or other keyword.\r",
  "C0326": " \r  Occurs when a wrong number of spaces is used around an operator, bracket or\r  block opener.\r",
  "C0327": " \r  Occurs when there are mixed (LF and CRLF) newline signs in a file.\r",
  "C0328": " \r  Occurs when there is different newline than expected.\r",
  "C0330": " \r  TODO\r",
  "C0401": " \r  Occurs when a word in comment is not spelled correctly.\r",
  "C0402": " \r  Occurs when a word in docstring is not spelled correctly.\r",
  "C0403": " \r  Occurs when a word in docstring cannot be checked by enchant.\r",
  "C0410": " \r  Occurs when import statement importing multiple modules is detected.\r",
  "C0411": " \r  Occurs when PEP8 import order is not respected (standard imports first, then\r  third-party libraries, then local imports)\r",
  "C0412": " \r  Occurs when imports are not grouped by packages\r",
  "C0413": " \r  Occurs when code and imports are mixed\r",
  "C0414": " \r  Occurs when an import alias is same as original package.e.g using import numpy\r  as numpy instead of import numpy as np\r",
  "C1801": " \r  Occurs when Pylint detects that len(sequence) is being used inside a condition\r  to determine if a sequence is empty. Instead of comparing the length to 0,\r  rely on the fact that empty sequences are false.\r",
  "E0001": "\r  Occurs when a syntax error is raised for a module.\r",
  "E0011": " \r  Occurs when an unknown inline option is encountered.\r",
  "E0012": " \r  Occurs when a bad value for an inline option is encountered.\r",
  "E0100": " \r  Occurs when the special class method __init__ is turned into a generator by a\r  yield in its body.\r",
  "E0101": " \r  Occurs when the special class method __init__ has an explicit return value.\r",
  "E0102": " \r  Occurs when a function / class / method is redefined.\r",
  "E0103": " \r  Occurs when break or continue keywords are used outside a loop.\r",
  "E0104": " \r  Occurs when a \"return\" statement is found outside a function or method.\r",
  "E0105": " \r  Occurs when a \"yield\" statement is found outside a function or method.\r",
  "E0107": " \r  Occurs when you attempt to use the C-style pre-increment or pre-decrement\r  operator -- and ++, which doesn't exist in Python.\r",
  "E0108": " \r  Duplicate argument names in function definitions are syntax errors.\r",
  "E0110": " \r  Occurs when an abstract class with `abc.ABCMeta` as metaclass has abstract\r  methods and is instantiated.\r",
  "E0111": " \r  Occurs when the first argument to reversed() builtin isn't a sequence (does not\r  implement __reversed__, nor __getitem__ and __len__\r",
  "E0112": " \r  Emitted when there are more than one starred expressions (`*x`) in an\r  assignment. This is a SyntaxError.\r",
  "E0113": " \r  Emitted when a star expression is used as a starred assignment target.\r",
  "E0114": " \r  Emitted when a star expression is not used in an assignment target.\r",
  "E0115": " \r  Emitted when a name is both nonlocal and global.\r",
  "E0116": " \r  Emitted when the `continue` keyword is found inside a finally clause, which is\r  a SyntaxError.\r",
  "E0117": " \r  Emitted when a nonlocal variable does not have an attached name somewhere in\r  the parent scopes\r",
  "E0118": " \r  Emitted when a name is used prior a global declaration, which results in an\r  error since Python 3.6. This message can't be emitted when using Python < 3.6.\r",
  "E0119": " \r  Emitted when format function is not called on str object. e.g doing\r  print(\"value: {}\").format(123) instead of print(\"value: {}\".format(123)). This\r  might not be what the user intended to do.\r",
  "E0202": " \r  Occurs when a class defines a method which is hidden by an instance attribute\r  from an ancestor class or set by some client code.\r",
  "E0203": " \r  Occurs when an instance member is accessed before it's actually assigned.\r",
  "E0211": " \r  Occurs when a method which should have the bound instance as first argument has\r  no argument defined.\r",
  "E0213": " \r  Occurs when a method has an attribute different the \"self\" as first argument.\r  This is considered as an error since this is a so common convention that you\r  shouldn't break it!\r",
  "E0236": " \r  Occurs when an invalid (non-string) object occurs in __slots__.\r",
  "E0237": " \r  Occurs when assigning to an attribute not defined in the class slots.\r",
  "E0238": " \r  Occurs when an invalid __slots__ is found in class. Only a string, an iterable\r  or a sequence is permitted.\r",
  "E0239": " \r  Occurs when a class inherits from something which is not a class.\r",
  "E0240": " \r  Occurs when a class has an inconsistent method resolution order.\r",
  "E0241": " \r  Occurs when a class has duplicate bases.\r",
  "E0301": " \r  Occurs when an __iter__ method returns something which is not an iterable (i.e.\r  has no `__next__` method)\r",
  "E0302": " \r  Emitted when a special method was defined with an invalid number of\r  parameters. If it has too few or too many, it might not work at all.\r",
  "E0303": " \r  Occurs when a __len__ method returns something which is not a non-negative\r  integer\r",
  "E0401": " \r  Occurs when pylint has been unable to import a module.\r",
  "E0402": " \r  Occurs when a relative import tries to access too many levels in the current\r  package.\r",
  "E0601": " \r  Occurs when a local variable is accessed before it's assignment.\r",
  "E0602": " \r  Occurs when an undefined variable is accessed.\r",
  "E0603": " \r  Occurs when an undefined variable name is referenced in __all__.\r",
  "E0604": " \r  Occurs when an invalid (non-string) object occurs in __all__.\r",
  "E0611": " \r  Occurs when a name cannot be found in a module.\r",
  "E0632": " \r  Occurs when there is an unbalanced tuple unpacking in assignment\r",
  "E0633": " \r  Occurs when something which is not a sequence is used in an unpack assignment\r",
  "E0701": " \r  Occurs when except clauses are not in the correct order (from the more specific\r  to the more generic). If you don't fix the order, some exceptions may not be\r  caught by the most specific handler.\r",
  "E0702": " \r  Occurs when something which is neither a class, an instance or a string is\r  raised (i.e. a `TypeError` will be raised).\r",
  "E0703": " \r  Occurs when using the syntax \"raise ... from ...\", where the exception context\r  is not an exception, nor None.\r",
  "E0704": " \r  Occurs when a bare raise is not used inside an except clause. This generates an\r  error, since there are no active exceptions to be reraised. An exception to\r  this rule is represented by a bare raise inside a finally clause, which might\r  work, as long as an exception is raised inside the try block, but it is\r  nevertheless a code smell that must not be relied upon.\r",
  "E0710": " \r  Occurs when a new style class which doesn't inherit from BaseException is\r  raised.\r",
  "E0711": " \r  Occurs when NotImplemented is raised instead of NotImplementedError\r",
  "E0712": " \r  Occurs when a class which doesn't inherit from Exception is used as an exception\r  in an except clause.\r",
  "E1003": " \r  Occurs when another argument than the current class is given as first argument\r  of the super builtin.\r",
  "E1101": " \r  Occurs when a variable is accessed for an unexistent member.\r",
  "E1102": " \r  Occurs when an object being called has been inferred to a non callable object.\r",
  "E1111": " \r  Occurs when an assignment is done on a function call but the inferred function\r  doesn't return anything.\r",
  "E1120": " \r  Occurs when a function call passes too few arguments.\r",
  "E1121": " \r  Occurs when a function call passes too many positional arguments.\r",
  "E1123": " \r  Occurs when a function call passes a keyword argument that doesn't correspond to\r  one of the function's parameter names.\r",
  "E1124": " \r  Occurs when a function call would result in assigning multiple values to a\r  function parameter, one value from a positional argument and one from a\r  keyword argument.\r",
  "E1125": " \r  Occurs when a function call does not pass a mandatory keyword-only argument.\r",
  "E1126": " \r  Occurs when a sequence type is indexed with an invalid type. Valid types are\r  ints, slices, and objects with an __index__ method.\r",
  "E1127": " \r  Occurs when a slice index is not an integer, None, or an object with an\r  __index__ method.\r",
  "E1128": " \r  Occurs when an assignment is done on a function call but the inferred function\r  returns nothing but None.\r",
  "E1129": " \r  Occurs when an instance in a with statement doesn't implement the context\r  manager protocol(__enter__/__exit__).\r",
  "E1130": "\r  Emitted when a unary operand is used on an object which does not support this\r  type of operation.\r",
  "E1131": "\r  Emitted when a binary arithmetic operation between two operands is not\r  supported.\r",
  "E1132": " \r  Emitted when a function call got multiple values for a keyword.\r",
  "E1133": " \r  Occurs when a non-iterable value is used in place where iterable is expected\r",
  "E1134": " \r  Occurs when a non-mapping value is used in place where mapping is expected\r",
  "E1135": " \r  Emitted when an instance in membership test expression doesn't implement\r  membership protocol (__contains__/__iter__/__getitem__).\r",
  "E1136": " \r  Emitted when a subscripted value doesn't support subscription (i.e. doesn't\r  define __getitem__ method).\r",
  "E1137": " \r  Emitted when an object does not support item assignment (i.e. doesn't define\r  __setitem__ method).\r",
  "E1138": " \r  Emitted when an object does not support item deletion (i.e. doesn't define\r  __delitem__ method).\r",
  "E1139": " \r  Emitted whenever we can detect that a class is using, as a metaclass,\r  something which might be invalid for using as a metaclass.\r",
  "E1140": " \r  Emitted when a dict key is not hashable (i.e. doesn't define __hash__ method).\r",
  "E1200": " \r  Occurs when an unsupported format character is used in a logging statement\r  format string.\r",
  "E1201": " \r  Occurs when a logging statement format string terminates before the end of a\r  conversion specifier.\r",
  "E1205": " \r  Occurs when a logging format string is given too many arguments.\r",
  "E1206": " \r  Occurs when a logging format string is given too few arguments.\r",
  "E1300": " \r  Occurs when an unsupported format character is used in a format string.\r",
  "E1301": " \r  Occurs when a format string terminates before the end of a conversion specifier.\r",
  "E1302": " \r  Occurs when a format string contains both named (e.g. '%(foo)d') and unnamed\r  (e.g. '%d') conversion specifiers. This is also used when a named conversion\r  specifier contains * for the minimum field width and/or precision.\r",
  "E1303": " \r  Occurs when a format string that uses named conversion specifiers is used with\r  an argument that is not a mapping.\r",
  "E1304": " \r  Occurs when a format string that uses named conversion specifiers is used with a\r  dictionary that doesn't contain all the keys required by the format string.\r",
  "E1305": " \r  Occurs when a format string that uses unnamed conversion specifiers is given too\r  many arguments.\r",
  "E1306": " \r  Occurs when a format string that uses unnamed conversion specifiers is given too\r  few arguments\r",
  "E1310": " \r  The argument to a str.{l,r,}strip call contains a duplicate character,\r",
  "E1507": " \r  Env manipulation functions support only string type arguments. See\r  https://docs.python.org/3/library/os.html#os.getenv.\r",
  "E1601": " \r  Occurs when a print statement is used (`print` is a function in Python 3)\r",
  "E1602": " \r  Occurs when parameter unpacking is specified for a function(Python 3 doesn't\r  allow it)\r",
  "E1603": " \r  Python3 will not allow implicit unpacking of exceptions in except clauses. See\r  http://www.python.org/dev/peps/pep-3110/\r",
  "E1604": " \r  Occurs when the alternate raise syntax 'raise foo, bar' is used instead of\r  'raise foo(bar)'.\r",
  "E1605": " \r  Occurs when the deprecated \"``\" (backtick) operator is used instead of the str()\r  function.\r",
  "E1700": " \r  Occurs when an `yield` or `yield from` statement is found inside an async\r  function. This message can't be emitted when using Python < 3.5.\r",
  "E1701": " \r  Occurs when an async context manager is used with an object that does not\r  implement the async context management protocol. This message can't be emitted\r  when using Python < 3.5.\r",
  "F0001": "\r  Occurs when an error occurred preventing the analysis of a module (unable to\r  find it for instance).\r",
  "F0002": " \r  Occurs when an unexpected error occurred while building the Astroid\r  representation. This is usually accompanied by a traceback. Please report such\r  errors !\r",
  "F0010": " \r  Occurs when an exception occurred while building the Astroid representation\r  which could be handled by astroid.\r",
  "F0202": " \r  Occurs when Pylint has been unable to check methods signature compatibility for\r  an unexpected reason. Please report this kind if you don't make sense of it.\r",
  "I0001": " \r  Occurs to inform that a built-in module has not been checked using the raw\r  checkers.\r",
  "I0010": " \r  Occurs when an inline option is either badly formatted or can't be used inside\r  modules.\r",
  "I0011": " \r  Occurs when an inline option disables a message or a messages category.\r",
  "I0012": " \r  Occurs when an inline option enables a message or a messages category.\r",
  "I0013": " \r  Occurs to inform that the file will not be checked\r",
  "I0020": " \r  A message was triggered on a line, but suppressed explicitly by a disable=\r  comment in the file. This message is not generated for messages that are\r  ignored due to configuration settings.\r",
  "I0021": " \r  Reported when a message is explicitly disabled for a line or a block of code,\r  but never triggered.\r",
  "I0022": " \r  Some inline pylint options have been renamed or reworked, only the most recent\r  form should be used. NOTE:skip-all is only available with pylint >= 0.26\r",
  "I0023": "\r  Occurs when a message is enabled or disabled by id.\r",
  "I1101": " \r  Occurs when a variable is accessed for non-existent member of C extension. Due\r  to unavailability of source static analysis is impossible, but it may be\r  performed by introspecting living objects in run-time.\r",
  "R0123": " \r  Occurs when comparing an object to a literal, which is usually what you do not\r  want to do, since you can compare to a different literal than what was\r  expected altogether.\r",
  "R0124": " \r  Occurs when something is compared against itself.\r",
  "R0201": " \r  Occurs when a method doesn't use its bound instance, and so could be written as\r  a function.\r",
  "R0202": " \r  Occurs when a class method is defined without using the decorator syntax.\r",
  "R0203": " \r  Occurs when a static method is defined without using the decorator syntax.\r",
  "R0205": " \r  Occurs when a class inherit from object, which under python3 is implicit, hence\r  can be safely removed from bases.\r",
  "R0401": " \r  Occurs when a cyclic import between two or more modules is detected.\r",
  "R0801": " \r  Indicates that a set of similar lines has been detected among multiple file.\r  This usually means that the code should be refactored to avoid this\r  duplication.\r",
  "R0901": " \r  Occurs when class has too many parent classes, try to reduce this to get a\r  simpler (and so easier to use) class.\r",
  "R0902": " \r  Occurs when class has too many instance attributes, try to reduce this to get a\r  simpler (and so easier to use) class.\r",
  "R0903": " \r  Occurs when class has too few public methods, so be sure it's really worth it.\r",
  "R0904": " \r  Occurs when class has too many public methods, try to reduce this to get a\r  simpler (and so easier to use) class.\r",
  "R0911": " \r  Occurs when a function or method has too many return statement, making it hard\r  to follow.\r",
  "R0912": " \r  Occurs when a function or method has too many branches, making it hard to\r  follow.\r",
  "R0913": " \r  Occurs when a function or method takes too many arguments.\r",
  "R0914": " \r  Occurs when a function or method has too many local variables.\r",
  "R0915": " \r  Occurs when a function or method has too many statements. You should then split\r  it in smaller functions / methods.\r",
  "R0916": " \r  Occurs when an if statement contains too many boolean expressions.\r",
  "R1701": " \r  Occurs when multiple consecutive isinstance calls can be merged into one.\r",
  "R1702": " \r  Occurs when a function or a method has too many nested blocks. This makes the\r  code less understandable and maintainable.\r",
  "R1703": " \r  Occurs when an if statement can be replaced with 'bool(test)'.\r",
  "R1704": " \r  Occurs when a local name is redefining an argument, which might suggest a\r  potential error. This is taken in account only for a handful of name binding\r  operations, such as for iteration, with statement assignment and exception\r  handler assignment.\r",
  "R1705": " \r  Occurs in order to highlight an unnecessary block of code following an if\r  containing a return statement. As such, it will warn when it encounters an\r  else following a chain of ifs, all of them containing a return statement.\r",
  "R1706": " \r  Occurs when one of known pre-python 2.5 ternary syntax is used.\r",
  "R1707": " \r  In Python, a tuple is actually created by the comma symbol, not by the\r  parentheses. Unfortunately, one can actually create a tuple by misplacing a\r  trailing comma, which can lead to potential weird bugs in your code. You\r  should always use parentheses explicitly for creating a tuple.\r",
  "R1708": " \r  According to PEP479, the raise of StopIteration to end the loop of a generator\r  may lead to hard to find bugs. This PEP specify that raise StopIteration has\r  to be replaced by a simple return statement\r",
  "R1709": " \r  Emitted when redundant pre-python 2.5 ternary syntax is used.\r",
  "R1710": " \r  According to PEP8, if any return statement returns an expression, any return\r  statements where no value is returned should explicitly state this as return\r  None, and an explicit return statement should be present at the end of the\r  function (if reachable)\r",
  "R1711": " \r  Emitted when a single \"return\" or \"return None\" statement is found at the end\r  of function or method definition. This statement can safely be removed because\r  Python will implicitly return None\r",
  "R1712": " \r  You do not have to use a temporary variable in order to swap variables. Using\r  \"tuple unpacking\" to directly swap variables makes the intention more clear.\r",
  "R1713": " \r  Using str.join(sequence) is faster, uses less memory and increases readability\r  compared to for-loop iteration.\r",
  "R1714": " \r  To check if a variable is equal to one of many values,combine the values into\r  a tuple and check if the variable is contained \"in\" it instead of checking for\r  equality against each of the values.This is faster and less verbose.\r",
  "R1715": " \r  Using the builtin dict.get for getting a value from a dictionary if a key is\r  present or a default if not, is simpler and considered more idiomatic,\r  although sometimes a bit slower\r",
  "R1716": " \r  This message is emitted when pylint encounters boolean operation like\"a < b\r  and b < c\", suggesting instead to refactor it to \"a < b < c\"\r",
  "R1717": " \r  Although there is nothing syntactically wrong with this code, it is hard to\r  read and can be simplified to a dict comprehension.Also it is faster since you\r  don't need to create another transient list\r",
  "R1718": " \r  Although there is nothing syntactically wrong with this code, it is hard to\r  read and can be simplified to a set comprehension.Also it is faster since you\r  don't need to create another transient list\r",
  "W0101": " \r  Occurs when there is some code behind a \"return\" or \"raise\" statement, which\r  will never be accessed.\r",
  "W0102": " \r  Occurs when a mutable value as list or dictionary is detected in a default value\r  for an argument.\r",
  "W0104": " \r  Occurs when a statement doesn't have (or at least seems to) any effect.\r",
  "W0105": " \r  Occurs when a string is used as a statement (which of course has no effect).\r  This is a particular case of W0104 with its own message so you can easily\r  disable it if you're using those strings as documentation, instead of\r  comments.\r",
  "W0106": " \r  Occurs when an expression that is not a function call is assigned to nothing.\r  Probably something else was intended.\r",
  "W0107": " \r  Occurs when a \"pass\" statement that can be avoided is encountered.\r",
  "W0108": " \r  Occurs when the body of a lambda expression is a function call on the same\r  argument list as the lambda itself; such lambda expressions are in all but a\r  few cases replaceable with the function being called in the body of the\r  lambda.\r",
  "W0109": " \r  Occurs when a dictionary expression binds the same key multiple times.\r",
  "W0111": " \r  Occurs when assignment will become invalid in future Python release due to\r  introducing new keyword.\r",
  "W0120": " \r  Loops should only have an else clause if they can exit early with a break\r  statement, otherwise the statements under else should be on the same scope as\r  the loop itself.\r",
  "W0122": " \r  Occurs when you use the \"exec\" statement (function for Python 3), to discourage\r  its usage. That doesn't mean you cannot use it !\r",
  "W0123": " \r  Occurs when you use the \"eval\" function, to discourage its usage. Consider using\r  `ast.literal_eval` for safely evaluating strings containing Python expressions\r  from untrusted sources.\r",
  "W0124": " \r  Emitted when a `with` statement component returns multiple values and uses\r  name binding with `as` only for a part of those values, as in with ctx() as a,\r  b. This can be misleading, since it's not clear if the context manager returns\r  a tuple or if the node without a name binding is another context manager.\r",
  "W0125": " \r  Emitted when a conditional statement (If or ternary if) uses a constant value\r  for its test. This might not be what the user intended to do.\r",
  "W0143": " \r  This message is emitted when pylint detects that a comparison with a callable\r  was made, which might suggest that some parenthesis were omitted, resulting in\r  potential unwanted behaviour.\r",
  "W0150": " \r  Occurs when a break or a return statement is found inside the finally clause of\r  a try...finally block: the exceptions raised in the try clause will be\r  silently swallowed instead of being re-raised.\r",
  "W0199": " \r  A call of assert on a tuple will always evaluate to true if the tuple is not\r  empty, and will always evaluate to false if it is.\r",
  "W0201": " \r  Occurs when an instance attribute is defined outside the __init__ method.\r",
  "W0211": " \r  Occurs when a static method has \"self\" or a value specified in valid-\r  classmethod-first-arg option or valid-metaclass-classmethod-first-arg option\r  as first argument.\r",
  "W0212": " \r  Occurs when a protected member (i.e. class member with a name beginning with an\r  underscore) is access outside the class or a descendant of the class where\r  it's defined.\r",
  "W0221": " \r  Occurs when a method has a different number of arguments than in the implemented\r  interface or in an overridden method.\r",
  "W0222": " \r  Occurs when a method signature is different than in the implemented interface or\r  in an overridden method.\r",
  "W0223": " \r  Occurs when an abstract method (i.e. raise NotImplementedError) is not\r  overridden in concrete class.\r",
  "W0231": " \r  Occurs when an ancestor class method has an __init__ method which is not called\r  by a derived class.\r",
  "W0232": " \r  Occurs when a class has no __init__ method, neither its parent classes.\r",
  "W0233": " \r  Occurs when an __init__ method is called on a class which is not in the direct\r  ancestors for the analysed class.\r",
  "W0235": " \r  Occurs whenever we can detect that an overridden method is useless, relying on\r  super() delegation to do the same thing as another method from the MRO.\r",
  "W0301": " \r  Occurs when a statement is ended by a semi-colon (\";\"), which isn't necessary\r  (that's python, not C ;).\r",
  "W0311": " \r  Occurs when an unexpected number of indentation's tabulations or spaces has been\r  found.\r",
  "W0312": " \r  Occurs when there are some mixed tabs and spaces in a module.\r",
  "W0401": " \r  Occurs when `from module import *` is detected.\r",
  "W0402": " \r  Occurs a module marked as deprecated is imported.\r",
  "W0404": " \r  Occurs when a module is reimported multiple times.\r",
  "W0406": " \r  Occurs when a module is importing itself.\r",
  "W0410": " \r  Python 2.5 and greater require __future__ import to be the first non docstring\r  statement in the module.\r",
  "W0511": "\r  Occurs when a warning note as FIXME or XXX is detected.\r",
  "W0601": " \r  Occurs when a variable is defined through the \"global\" statement but the\r  variable is not defined in the module scope.\r",
  "W0602": " \r  Occurs when a variable is defined through the \"global\" statement but no\r  assignment to this variable is done.\r",
  "W0603": " \r  Occurs when you use the \"global\" statement to update a global variable. Pylint\r  just try to discourage this usage. That doesn't mean you cannot use it !\r",
  "W0604": " \r  Occurs when you use the \"global\" statement at the module level since it has no\r  effect\r",
  "W0611": " \r  Occurs when an imported module or variable is not used.\r",
  "W0612": " \r  Occurs when a variable is defined but not used.\r",
  "W0613": " \r  Occurs when a function or method argument is not used.\r",
  "W0614": " \r  Occurs when an imported module or variable is not used from a `'from X import\r  *'` style import.\r",
  "W0621": " \r  Occurs when a variable's name hides a name defined in the outer scope.\r",
  "W0622": " \r  Occurs when a variable or function override a built-in.\r",
  "W0623": " \r  Occurs when an exception handler assigns the exception to an existing name\r",
  "W0631": " \r  Occurs when a loop variable (i.e. defined by a for loop or a list comprehension\r  or a generator expression) is used outside the loop.\r",
  "W0640": " \r  A variable used in a closure is defined in a loop. This will result in all\r  closures using the same value for the closed-over variable.\r",
  "W0641": " \r  Occurs when a variable is defined but might not be used. The possibility comes\r  from the fact that locals() might be used, which could consume or not the said\r  variable\r",
  "W0642": " \r  Invalid assignment to self or cls in instance or class method respectively.\r",
  "W0702": " \r  Occurs when an except clause doesn't specify exceptions type to catch.\r",
  "W0703": " \r  Occurs when an except catches a too general exception, possibly burying\r  unrelated errors.\r",
  "W0705": " \r  Occurs when an except catches a type that was already caught by a previous\r  handler.\r",
  "W0706": " \r  Occurs when an except handler uses raise as its first or only operator. This is\r  useless because it raises back the exception immediately. Remove the raise\r  operator or the entire try-except-raise block!\r",
  "W0711": " \r  Occurs when the exception to catch is of the form \"except A or B:\". If intending\r  to catch multiple, rewrite as \"except (A, B):\"\r",
  "W0715": " \r  Occurs when passing multiple arguments to an exception constructor, the first of\r  them a string literal containing what appears to be placeholders intended for\r  formatting\r",
  "W1113": " \r  When defining a keyword argument before variable positional arguments, one can\r  end up in having multiple values passed for the aforementioned parameter in\r  case the method is called with keyword arguments.\r",
  "W1201": " \r  Occurs when a logging statement has a call form of \"logging.<logging\r  method>(format_string % (format_args...))\". Such calls should leave string\r  interpolation to the logging method itself and be written \"logging.<logging\r  method>(format_string, format_args...)\" so that the program may avoid\r  incurring the cost of the interpolation in those cases in which no message\r  will be logged. For more, see http://www.python.org/dev/peps/pep-0282/.\r",
  "W1202": " \r  Occurs when a logging statement has a call form of \"logging.<logging\r  method>(format_string.format(format_args...))\". Such calls should use %\r  formatting instead, but leave interpolation to the logging function by passing\r  the parameters as arguments.\r",
  "W1203": " \r  Occurs when a logging statement has a call form of \"logging.method(f\"...\"))\".\r  Such calls should use % formatting instead, but leave interpolation to the\r  logging function by passing the parameters as arguments.\r",
  "W1300": " \r  Occurs when a format string that uses named conversion specifiers is used with a\r  dictionary whose keys are not all strings.\r",
  "W1301": " \r  Occurs when a format string that uses named conversion specifiers is used with a\r  dictionary that contains keys not required by the format string.\r",
  "W1302": " \r  Occurs when a PEP 3101 format string is invalid. This message can't be emitted\r  when using Python < 2.7.\r",
  "W1303": " \r  Occurs when a PEP 3101 format string that uses named fields doesn't receive one\r  or more required keywords. This message can't be emitted when using Python <\r  2.7.\r",
  "W1304": " \r  Occurs when a PEP 3101 format string that uses named fields is used with an\r  argument that is not required by the format string. This message can't be\r  emitted when using Python < 2.7.\r",
  "W1305": " \r  Occurs when a PEP 3101 format string contains both automatic field numbering\r  (e.g. '{}') and manual field specification (e.g. '{0}'). This message can't be\r  emitted when using Python < 2.7.\r",
  "W1306": " \r  Occurs when a PEP 3101 format string uses an attribute specifier ({0.length}),\r  but the argument passed for formatting doesn't have that attribute. This\r  message can't be emitted when using Python < 2.7.\r",
  "W1307": " \r  Occurs when a PEP 3101 format string uses a lookup specifier ({a[1]}), but the\r  argument passed for formatting doesn't contain or doesn't have that key as an\r  attribute. This message can't be emitted when using Python < 2.7.\r",
  "W1401": " \r  Occurs when a backslash is in a literal string but not as an escape.\r",
  "W1402": " \r  Occurs when an escape like \\u is encountered in a byte string where it has no\r  effect.\r",
  "W1501": " \r  Python supports: r, w, a[, x] modes with b, +, and U (only with r) options.\r  See http://docs.python.org/2/library/functions.html#open\r",
  "W1503": " \r  The first argument of assertTrue and assertFalse is a condition. If a constant\r  is passed as parameter, that condition will be always true. In this case a\r  warning should be emitted.\r",
  "W1505": " \r  The method is marked as deprecated and will be removed in a future version of\r  Python. Consider looking for an alternative in the documentation.\r",
  "W1506": " \r  The warning is emitted when a threading.Thread class is instantiated without\r  the target function being passed. By default, the first parameter is the group\r  param, not the target param.\r",
  "W1507": " \r  os.environ is not a dict object but proxy object, so shallow copy has still\r  effects on original object. See https://bugs.python.org/issue15373 for\r  reference.\r",
  "W1508": " \r  Env manipulation functions return None or str values. Supplying anything\r  different as a default may cause bugs. See\r  https://docs.python.org/3/library/os.html#os.getenv.\r",
  "W1509": " \r  The preexec_fn parameter is not safe to use in the presence of threads in your\r  application. The child process could deadlock before exec is called. If you\r  must use it, keep it trivial! Minimize the number of libraries you call\r  into.https://docs.python.org/3/library/subprocess.html#popen-constructor\r",
  "W1601": " \r  Occurs when the apply built-in function is referenced (missing from Python 3)\r",
  "W1602": " \r  Occurs when the basestring built-in function is referenced (missing from Python\r  3)\r",
  "W1603": " \r  Occurs when the buffer built-in function is referenced (missing from Python 3)\r",
  "W1604": " \r  Occurs when the cmp built-in function is referenced (missing from Python 3)\r",
  "W1605": " \r  Occurs when the coerce built-in function is referenced (missing from Python 3)\r",
  "W1606": " \r  Occurs when the execfile built-in function is referenced (missing from Python 3)\r",
  "W1607": " \r  Occurs when the file built-in function is referenced (missing from Python 3)\r",
  "W1608": " \r  Occurs when the long built-in function is referenced (missing from Python 3)\r",
  "W1609": " \r  Occurs when the raw_input built-in function is referenced (missing from Python\r  3)\r",
  "W1610": " \r  Occurs when the reduce built-in function is referenced (missing from Python 3)\r",
  "W1611": " \r  Occurs when the StandardError built-in function is referenced (missing from\r  Python 3)\r",
  "W1612": " \r  Occurs when the unicode built-in function is referenced (missing from Python 3)\r",
  "W1613": " \r  Occurs when the xrange built-in function is referenced (missing from Python 3)\r",
  "W1614": " \r  Occurs when a __coerce__ method is defined (method is not used by Python 3)\r",
  "W1615": " \r  Occurs when a __delslice__ method is defined (method is not used by Python 3)\r",
  "W1616": " \r  Occurs when a __getslice__ method is defined (method is not used by Python 3)\r",
  "W1617": " \r  Occurs when a __setslice__ method is defined (method is not used by Python 3)\r",
  "W1618": " \r  Occurs when an import is not accompanied by ``from __future__ import\r  absolute_import`` (default behaviour in Python 3)\r",
  "W1619": " \r  Occurs for non-floor division w/o a float literal or ``from __future__ import\r  division`` (Python 3 returns a float for int division unconditionally)\r",
  "W1620": " () method*\r  Occurs for calls to dict.iterkeys(), itervalues() or iteritems() (Python 3 lacks\r  these methods)\r",
  "W1621": " () method*\r  Occurs for calls to dict.viewkeys(), viewvalues() or viewitems() (Python 3 lacks\r  these methods)\r",
  "W1622": " \r  Occurs when an object's next() method is called (Python 3 uses the next() built-\r  in function)\r",
  "W1623": " \r  Occurs when a metaclass is specified by assigning to __metaclass__ (Python 3\r  specifies the metaclass as a class statement argument)\r",
  "W1624": " \r  Indexing exceptions will not work on Python 3. Use `exception.args[index]`\r  instead.\r",
  "W1625": " \r  Occurs when a string exception is raised. This will not work on Python 3.\r",
  "W1626": " \r  Occurs when the reload built-in function is referenced (missing from Python 3).\r  You can use instead imp.reload or importlib.reload.\r",
  "W1627": " \r  Occurs when an __oct__ method is defined (method is not used by Python 3)\r",
  "W1628": " \r  Occurs when a __hex__ method is defined (method is not used by Python 3)\r",
  "W1629": " \r  Occurs when a __nonzero__ method is defined (method is not used by Python 3)\r",
  "W1630": " \r  Occurs when a __cmp__ method is defined (method is not used by Python 3)\r",
  "W1632": " \r  Occurs when the input built-in is referenced (backwards-incompatible semantics\r  in Python 3)\r",
  "W1633": " \r  Occurs when the round built-in is referenced (backwards-incompatible semantics\r  in Python 3)\r",
  "W1634": " \r  Occurs when the intern built-in is referenced (Moved to sys.intern in Python 3)\r",
  "W1635": " \r  Occurs when the unichr built-in is referenced (Use chr in Python 3)\r",
  "W1636": " \r  Occurs when the map built-in is referenced in a non-iterating context (returns\r  an iterator in Python 3)\r",
  "W1637": " \r  Occurs when the zip built-in is referenced in a non-iterating context (returns\r  an iterator in Python 3)\r",
  "W1638": " \r  Occurs when the range built-in is referenced in a non-iterating context (returns\r  an iterator in Python 3)\r",
  "W1639": " \r  Occurs when the filter built-in is referenced in a non-iterating context\r  (returns an iterator in Python 3)\r",
  "W1640": " \r  Using the cmp argument for list.sort or the sorted builtin should be avoided,\r  since it was removed in Python 3. Using either `key` or `functools.cmp_to_key`\r  should be preferred.\r",
  "W1641": " \r  Occurs when a class implements __eq__ but not __hash__. In Python 2, objects get\r  object.__hash__ as the default implementation, in Python 3 objects get None as\r  their default __hash__ implementation if they also implement __eq__.\r",
  "W1642": " \r  Occurs when a __div__ method is defined. Using `__truediv__` and setting__div__\r  = __truediv__ should be preferred.(method is not used by Python 3)\r",
  "W1643": " \r  Occurs when an __idiv__ method is defined. Using `__itruediv__` and\r  setting__idiv__ = __itruediv__ should be preferred.(method is not used by\r  Python 3)\r",
  "W1644": " \r  Occurs when a __rdiv__ method is defined. Using `__rtruediv__` and\r  setting__rdiv__ = __rtruediv__ should be preferred.(method is not used by\r  Python 3)\r",
  "W1645": " \r  Occurs when the message attribute is accessed on an Exception. Use\r  str(exception) instead.\r",
  "W1646": " \r  Occurs when using str.encode or str.decode with a non-text encoding. Use codecs\r  module to handle arbitrary codecs.\r",
  "W1647": " \r  Occurs when accessing sys.maxint. Use sys.maxsize instead.\r",
  "W1648": " \r  Occurs when importing a module that no longer exists in Python 3.\r",
  "W1649": " \r  Occurs when accessing a string function that has been deprecated in Python 3.\r",
  "W1650": " \r  Occurs when using the deprecated deletechars parameters from str.translate. Use\r  re.sub to remove the desired characters\r",
  "W1651": " \r  Occurs when accessing a function on itertools that has been removed in Python 3.\r",
  "W1652": " \r  Occurs when accessing a field on types that has been removed in Python 3.\r",
  "W1653": " \r  Occurs when a next method is defined that would be an iterator in Python 2 but\r  is treated as a normal function in Python 3.\r",
  "W1654": " \r  Occurs when dict.items is referenced in a non-iterating context (returns an\r  iterator in Python 3)\r",
  "W1655": " \r  Occurs when dict.keys is referenced in a non-iterating context (returns an\r  iterator in Python 3)\r",
  "W1656": " \r  Occurs when dict.values is referenced in a non-iterating context (returns an\r  iterator in Python 3)\r",
  "W1657": " \r  Occurs when accessing a field on operator module that has been removed in Python\r  3.\r",
  "W1658": " \r  Occurs when accessing a field on urllib module that has been removed or moved in\r  Python 3.\r",
  "W1659": " \r  Occurs when accessing the xreadlines() function on a file stream, removed in\r  Python 3.\r",
  "W1660": " \r  Occurs when accessing a field on sys module that has been removed in Python 3.\r",
  "W1661": " \r  Emitted when using an exception, that was bound in an except handler, outside\r  of the except handler. On Python 3 these exceptions will be deleted once they\r  get out of the except handler.\r"
}

function format_error(error) {
  if (error == "" || error == null) {
    return null;
  }

  let list_words = error.split(" ");

  if (list_words.length < 3) {
    return null;
  }

  if (error.includes("Your code has been rated at")) {
    return null;
  }

  let line_num = error.split(":")[1]

  let error_yet = false;
  let message_yet = false;
  let first_time = true;
  let i = 0;
  let full_message = "";
  let error_code = null;
  let error_string = null;
  // error_code=None
  length = list_words.length

  error_code = list_words[1].slice(0, -1);
  full_message = list_words.slice(2, length - 1).join(" ");
  error_string = list_words[length - 1].substring(1, list_words[length - 1].length - 1);

  try {
    error_info = pylint_messages[error_code];
  } catch (err) {
    error_info = "No info at the moment";
  }

  return {
    "code": error_code,
    "error": error_string,
    "message": full_message,
    "line": line_num,
    "error_info": error_info,
  }

}

function process_output(code) {
  let errors_list = code.split(/\n/);
  if (errors_list[1].includes("--------------------------------------------------------------------") &&
    errors_list[2].includes("Your code has been rated at") && !errors_list[0].includes("module")) {
    return None
  }

  errors_list.shift();

  pylint_dict = [];

  for (let i = 0; i < errors_list.length; i++) {
    pylint_dict.push(format_error(errors_list[i]));
  }

  return pylint_dict;

}

$(document).ready(function() {
  //Pulls info from AJAX call and sends it off to codemirror's update linting
  //Has callback result_cb
  // var socket = io.connect('http://' + document.domain + ':' + location.port + '/check_disconnect');
  var click_count = 0;

  function check_syntax(code, result_cb) {
    //Example error for guideline
    var error_list = [{
      line_no: null,
      column_no_start: null,
      column_no_stop: null,
      fragment: null,
      message: null,
      severity: null
    }];

    //Push and replace errors
    function check(data) {
      //Clear array.
      error_list = [{
        line_no: null,
        column_no_start: null,
        column_no_stop: null,
        fragment: null,
        message: null,
        severity: null
      }];
      document.getElementById('errorslist').innerHTML = '';
      $('#errorslist').append("<tr>" + "<th>Line</th>" + "<th>Severity</th>" +
        "<th>Error</th>" + "<th>Tips</th>" +
        "<th>Error Code</th>" +
        "<th>Error Info</th>" + "</tr>");
      var data_length = 0;
      if (data != null) {
        data_length = Object.keys(data).length;
      }
      for (var x = 0; x < data_length; x += 1) {
        if (data[x] == null) {
          continue
        }
        number = data[x].line
        code = data[x].code
        codeinfo = data[x].error_info
        severity = code[0]
        moreinfo = data[x].message
        message = data[x].error

        //Set severity to necessary parameters
        if (severity == "E" || severity == "e") {
          severity = "error";
          severity_color = "red";
        } else if (severity == "W" || severity == "w") {
          severity = "warning";
          severity_color = "#DAA520";
        }
        //Push to error list
        error_list.push({
          line_no: number,
          column_no_start: null,
          column_no_stop: null,
          fragment: null,
          message: message,
          severity: severity
        });

        //Get help message for each id
        // var moreinfo = getHelp(id);
        //Append all data to table
        $('#errorslist').append("<tr>" + "<td>" + number + "</td>" +
          "<td style=\"background-color:" + severity_color + ";\"" +
          ">" + severity + "</td>" +
          "<td>" + message + "</td>" +
          "<td>" + moreinfo + "</td>" +
          "<td>" + code + "</td>" +
          "<td>" + codeinfo + "</td>" +
          "</tr>");
      }
      if (data != null) {
        result_cb(error_list);
      }

    }
    //AJAX call to pylint
    $.post({
      url: '/compile',
      contentType: "application/json",
      headers: {
        "X-API-Key": "sdkljf56789#KT34_"
      },
      dataType: 'json',
      data: JSON.stringify({
        code: code,
        typeRequest: "lint"
      }),
    }, function(data) {
      var current_text = data.stdout;
      //Check Text
      let processed_code = process_output(current_text);
      check(processed_code);
      // check(current_text);
      return false;
    });
  }

  var editor = CodeMirror.fromTextArea(document.getElementById("txt"), {
    mode: {
      name: "python",
      version: 2,
      singleLineStringErrors: false
    },
    lineNumbers: true,
    indentUnit: 4,
    matchBrackets: true,
    lint: true,
    styleActiveLine: true,
    gutters: ["CodeMirror-lint-markers"],
    lintWith: {
      "getAnnotations": CodeMirror.remoteValidator,
      "async": true,
      "check_cb": check_syntax
    },
  });

  //Actually Run in Python
  $("#run").click(function() {
    var code = editor.getValue();
    $.post({
      url: '/compile',
      contentType: "application/json",
      headers: {
        "X-API-Key": "sdkljf56789#KT34_"
      },
      dataType: 'json',
      testing: "test",
      data: JSON.stringify({
        code: code,
        typeRequest: "run"
      }),
    }, function(data) {
      print_result(data.combined);
      return false;
    });

    function print_result(data) {
      document.getElementById('output').innerHTML = '';
      $("#output").append("<pre>" + data + "</pre>");
    }
  });
  var exampleCode = function(id, text) {
    $(id).click(function(e) {
      editor.setValue(text);
      editor.focus(); // so that F5 works, hmm
    });
  };

  exampleCode('#codeexample1', "methods = []\nfor i in range(10):\n    methodds.append(lambda x: x + i)\nprint(methods[0](10))");
  exampleCode('#codeexample2', "for i in range(5):\n    print(i)\n");
  exampleCode('#codeexample3', "print [x*x for x in range(20) if x % 2 == 0]");
  exampleCode('#codeexample4', "print(45**123)");
  exampleCode('#codeexample5', "print (\"%s:%r:%d:%x\\n%#-+37.34o\" % (\n        \"dog\",\n        \"cat\",\n        23456,\n        999999999999L,\n        0123456702345670123456701234567L))");
  exampleCode('#codeexample6', "def genr(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\nprint(list(genr(12)))\n");
  exampleCode('#codeexample7', "# obscure C3 MRO example from Python docs\nclass O(object): pass\nclass A(O): pass\nclass B(O): pass\nclass C(O): pass\nclass D(O): pass\nclass E(O): pass\nclass K1(A,B,C): pass\nclass K2(D,B,E): pass\nclass K3(D,A): pass\nclass Z(K1,K2,K3): pass\nprint Z.__mro__\n");
});
