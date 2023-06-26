- **\*JSDoc**

  JSDoc là một loại ngôn ngữ đánh dấu sử dụng comment trong dự án Javascript, là loại documentation comment có chức năng chú thích chi tiết các thành phần của dự án Javascript. Do tính chất mạnh mẽ và phổ biến của nó, JSDoc còn được nhiều công cụ sử dụng để tạo ra documentation cho dự án. Ngoài JSDoc sử dụng cho Javascript ra ta còn có phpDoc (PHP), Javadoc (Java),... Hiện nay JSDoc đã được tích hợp vào các text editor/IDE phổ biến như Sublime Text, VSCode, Intellij,...

  Ví dụ ta có một đoạn code Javascript sau đây được viết trong VSCode, khi di chuột vào hàm ta có thể thấy mô tả của hàm:

  Ta có thể thấy hàm printMessage có thể nhận đầu vào msg là bất cứ kiểu dữ liệu gì, nhưng nếu chúng ta muốn cho người khác biết rằng hàm printMessage chỉ nhận msg là kiểu dữ liệu string ta có thể khai báo nó bằng JSDoc. Để viết JSDoc ta cần viết trong cặp dấu /\*\* \*/:

  /\*\*

  \* Hàm này dùng để in ra tin nhắn

  \* @param {string} msg

  \*/

  function printMessage(msg) {

  console.log("Message: " + msg);

  }

  Khi di chuột vào lần hàm lần nữa ta có thể thấy giờ đây hàm đã có khai báo chi tiết hơn:

  Ngoài sử dụng cho hàm thì JSDoc còn có thể sử dụng cho biến:

  /\*_ @type {string} Biến này chứa tin nhắn cần hiển thị _/

  let helloMessage = "Hello";

  **Type-checking với JSDoc và VSCode**

  Nhưng trong một số trường hợp chúng ta vẫn có thể mắc một chút sai sót như sử dụng sai kiểu dữ liệu cho hàm như thế này:

  let helloMessage = 2;

  printMessage(helloMessage);

  Lúc đó chúng ta cần đến type-checking được tích hợp sẵn vào VSCode để giúp thể hiện lỗi lên text-editor khi chúng ta sử dụng sai kiểu dữ liệu. Để sử dụng nó ta cần thêm // @ts-check vào đầu file:

  // @ts-check

  /\*\*

  \* Hàm này dùng để in ra tin nhắn

  \* @param {string} msg

  \*/

  function printMessage(msg) {

  console.log("Message: " + msg);

  }

  let helloMessage = 2;

  printMessage(helloMessage);

  Giờ đây khi sử dụng sai kiểu dữ liệu cho hàm printMessage thì VSCode sẽ báo lỗi trực quan hơn:

  Nhưng trong một dự án lớn gồm cả trăm, ngàn file .js thì việc thêm // @ts-check vào đầu từng file có vẻ không phải là một biện pháp tốt. Lúc đó ta cần sử dụng đến file jsconfig.json được tạo ra ở root-folder (thư mục gốc) của dự án:

  Trong file jsconfig.json ta thêm nội dung như sau:

  {

  "compilerOptions": {

  "checkJs": true

  }

  }

  Tiếp theo nhấn tổ hợp Ctrl + Shift + P để mở hộp command của VSCode. Tìm và mở setting:

  Trong setting ta tìm JS/TS > Implicit Project Config: Check JS và bật chức năng đó lên, giờ đây VSCode có thể đọc và sử dụng các config trong file jsconfig.json:

  Giờ đây toàn bộ những file .js trong thư mục của dự án đều đã được bật type-checking mà không cần phải thêm // @ts-check vào đầu từng file, nếu VSCode chưa kịp update thì ta cần tắt đi và mở lại VSCode:

  Nhưng nếu teammate của bạn không dùng VSCode hoặc IDE của họ không hỗ trợ mà vẫn muốn sử dụng type-checking thì phải làm sao? Lúc đó ta cần thay file jsconfig.json thành file tsconfig.json với nội dung như sau:

  {

  "compilerOptions": {

  "allowJs": true,

  "checkJs": true

  }

  }

  Mở command line ở thư mục gốc của dự án và chạy câu lệnh:

  npx tsc --noEmit

  **Các thẻ khác của JSDoc**

  Ngoài các thẻ @type và @param đã giới thiệu ở trên ta còn có một số thẻ cơ bản khác:

  - Thẻ [**@async**](https://viblo.asia/u/async): Chi định hàm đó là asynchronous.
  - Thẻ [**@returns**](https://viblo.asia/u/returns): Chỉ định giá trị trả về cho function.
  - Thẻ [**@version**](https://viblo.asia/u/version): Chỉ định phiên bản của một danh mục.
  - Thẻ [**@see**](https://viblo.asia/u/see): Tham chiếu tới một liên kết để biết thêm thông tin.

\*TYPE SCRIPT

TypeScript cung cấp hai khái niệm quan trọng là interface (giao diện) và type (kiểu) để định nghĩa các kiểu dữ liệu trong quá trình phát triển ứng dụng.

Interface (Giao diện):

Interface trong TypeScript là một cách để định nghĩa một hợp đồng (contract) cho một đối tượng. Nó chỉ định các thuộc tính và phương thức mà một đối tượng phải có. Interface không tạo ra mã JavaScript khi được biên dịch, nó chỉ tồn tại trong quá trình phát triển và kiểm tra kiểu dữ liệu (type checking). Dưới đây là một ví dụ về cách sử dụng interface:

typescript

Copy code

interface Person {

name: string;

age: number;

sayHello(): void;

}

function greet(person: Person): void {

console.log(`Hello, ${person.name}!`);

}

const john: Person = {

name: "John",

age: 25,

sayHello() {

console.log("Hello!");

},

};

greet(john);

Trong ví dụ trên, chúng ta định nghĩa một interface Person với các thuộc tính name và age, cùng một phương thức sayHello. Hàm greet nhận một tham số là một đối tượng có kiểu Person và in ra một câu chào theo tên của người đó. Cuối cùng, chúng ta tạo một đối tượng john thỏa mãn interface Person và truyền nó vào hàm greet.

Type (Kiểu):

TypeScript cũng cung cấp khái niệm type để định nghĩa các kiểu dữ liệu tương tự như interface, nhưng có một số khác biệt. Type cho phép định nghĩa kiểu dữ liệu cho một biến, một tham số hoặc một kiểu dữ liệu tùy chỉnh. Dưới đây là một ví dụ về cách sử dụng type:

typescript

Copy code

type Point = {

x: number;

y: number;

};

function calculateDistance(point1: Point, point2: Point): number {

const dx = point2.x - point1.x;

const dy = point2.y - point1.y;

return Math.sqrt(dx _ dx + dy _ dy);

}

const p1: Point = { x: 0, y: 0 };

const p2: Point = { x: 3, y: 4 };

const distance = calculateDistance(p1, p2);

console.log(`Distance: ${distance}`);

Trong ví dụ trên, chúng ta định nghĩa một type Point với các thuộc tính x và y là số. Hàm calculateDistance nhận hai tham số kiểu Point và trả về một số. Chúng ta tạo hai đối tượng p1 và p2 thỏa mãn type Point, sau đó tí

\*COMPONENT

Component (Thành phần) là một khái niệm cơ bản trong lập trình và thiết kế phần mềm. Nó được sử dụng để chia nhỏ một hệ thống lớn thành các phần nhỏ hơn và độc lập, giúp dễ dàng quản lý và tái sử dụng.

Trong lĩnh vực phát triển phần mềm, một component là một phần tử hoặc thành phần đơn vị cơ bản, có thể tồn tại độc lập hoặc được kết hợp với các thành phần khác để tạo thành một hệ thống lớn hơn. Mỗi component thường chịu trách nhiệm cho một tác vụ cụ thể hoặc hiển thị một phần của giao diện người dùng.

Các thành phần có thể được tạo ra bằng nhiều ngôn ngữ lập trình khác nhau và có nhiều cách triển khai khác nhau, tùy thuộc vào môi trường và công nghệ được sử dụng. Trong lĩnh vực phát triển web, các thành phần có thể được tạo ra bằng HTML, CSS và JavaScript.

Một số lợi ích của việc sử dụng thành phần trong phát triển phần mềm bao gồm:

1. Tái sử dụng: Các thành phần có thể được sử dụng lại trong nhiều dự án khác nhau, giúp tiết kiệm thời gian và công sức phát triển.
2. Quản lý dễ dàng: Tách nhỏ hệ thống thành các thành phần đơn giản hơn, giúp quản lý và bảo trì dễ dàng hơn.
3. Phân chia trách nhiệm: Mỗi thành phần đảm nhận một trách nhiệm cụ thể, giúp giảm độ phức tạp của mã nguồn và tăng tính sáng tỏ.
4. Kiểm thử: Các thành phần có thể được kiểm thử một cách độc lập, giúp tăng tính ổn định và độ tin cậy của hệ thống.
5. Tương tác: Các thành phần có thể tương tác với nhau thông qua giao diện và truyền dữ liệu hoặc sự kiện.

Trên thực tế, việc sử dụng thành phần đã trở thành một phần quan trọng của nhiều khung làm việc và công nghệ phát triển phần mềm hiện đại, bao gồm cả React, Angular và Vue.js trong lĩnh vực phát triển web.

Trong React, "Component" (Thành phần) là một khái niệm quan trọng và cốt lõi. Nó đại diện cho một phần tử độc lập trong giao diện người dùng và được sử dụng để xây dựng các ứng dụng web phức tạp.

Một component trong React có thể được xem như một "khối xây dựng" tái sử dụng, nơi bạn có thể xây dựng giao diện người dùng bằng cách kết hợp các thành phần nhỏ lại với nhau.

Có hai loại component trong React: Component chức năng (Functional Component) và Component lớp (Class Component).

1. Functional Component (Component chức năng): Đây là một hàm JavaScript đơn giản nhận đầu vào là các thuộc tính (props) và trả về phần tử giao diện. Đây là cách định nghĩa component đơn giản và dễ hiểu nhất. Ví dụ:

```
jsxCopy code
import React from 'react';

function HelloWorld(props) {
  return <div>Xin chào, {props.name}!</div>;
}
```

1. Class Component (Component lớp): Đây là một class JavaScript mở rộng từ `React.Component`. Nó có một phương thức `render()` để trả về phần tử giao diện và có thể có các phương thức khác để quản lý trạng thái và hành vi của component. Ví dụ:

```
jsxCopy code
import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return <div>Xin chào, {this.props.name}!</div>;
  }
}
```

Cả hai loại component đều có thể nhận các thuộc tính (props) và sử dụng chúng để hiển thị dữ liệu trên giao diện. Điều này giúp tái sử dụng và tổ chức code một cách rõ ràng và dễ dàng bảo trì.

Khi sử dụng các component trong React, bạn có thể xây dựng một cây thành phần phức tạp, trong đó các component cha bao gồm các component con. Sự tương tác và truyền dữ liệu giữa các component có thể được thực hiện thông qua props hoặc các phương thức callback.

Component là một khái niệm quan trọng trong React, giúp xây dựng giao diện người dùng linh hoạt, dễ dàng bảo trì và tái sử dụng.
