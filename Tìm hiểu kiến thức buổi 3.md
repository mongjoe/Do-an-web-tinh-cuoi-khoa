*CÁC TRẠNG THÁI TRONG REACT 

1. State của component (Component State): Đây là trạng thái cục bộ và riêng của mỗi component. State được khai báo bên trong component bằng cách sử dụng useState hook hoặc thông qua class component với phương thức this.state. State có thể thay đổi trong quá trình thực thi của component và khi có sự tương tác từ người dùng hoặc các sự kiện khác.
- Ví dụ:
jsx
 
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Counter;
Trong ví dụ trên,   tạo một component Counter để đếm số lần nhấn vào nút "Increase" và "Decrease". Sử dụng useState hook,   khởi tạo một state ban đầu là 0 bằng cách sử dụng useState(0). Đồng thời, useState trả về một cặp giá trị: biến count để lưu trữ giá trị hiện tại của đếm và hàm setCount để cập nhật giá trị mới cho count.

Trong phần giao diện của component Counter,   hiển thị giá trị count bằng cách sử dụng cú pháp {count}. Khi nhấn vào nút "Increase" hoặc "Decrease",   gọi hàm increment hoặc decrement để tăng hoặc giảm giá trị count bằng cách gọi hàm setCount với giá trị mới tương ứng.

Qua ví dụ trên, ta có thể thấy cách sử dụng state của component để lưu trữ và cập nhật dữ liệu trong ứng dụng React.

2. Props (Properties): Đây là trạng thái được truyền từ component cha sang component con thông qua thuộc tính (props). Props không thể thay đổi bên trong component con và được coi là không thay đổi (immutable). Tuy nhiên, component con có thể nhận props mới từ component cha và cập nhật hiển thị dựa trên những thay đổi đó.
- Ví dụ:
Dưới đây là một ví dụ về Props (Properties) trong React:

jsx
 
import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

const App = () => {
  return <Greeting name="John" />;
};

export default App;
Trong ví dụ trên,   có hai component: Greeting và App. Component Greeting nhận vào một prop có tên là "name". Trong phần giao diện của Greeting,   sử dụng cú pháp {props.name} để hiển thị giá trị của prop "name" trong một câu chào.
Trong component App,   sử dụng component Greeting và truyền prop "name" với giá trị là "John". Khi App được render, component Greeting sẽ nhận prop "name" là "John" và hiển thị câu chào "Hello, John!".
Props cho phép   truyền dữ liệu từ một component cha (parent component) đến một component con (child component). Các prop có thể là bất kỳ giá trị nào, bao gồm cả giá trị cố định và biểu thức JavaScript.

3. Global State (Trạng thái toàn cục): Đây là trạng thái được chia sẻ và truy cập từ nhiều component khác nhau trong ứng dụng. Các thư viện quản lý trạng thái như Redux hoặc Context API của React có thể được sử dụng để lưu trữ và quản lý global state. Trạng thái toàn cục cho phép các component không liên quan trực tiếp có thể truy cập và chia sẻ dữ liệu một cách dễ dàng.
- Ví dụ:
jsx
 
import React, { createContext, useState } from "react";

// Tạo context
const GlobalContext = createContext();

// Component cha chứa trạng thái toàn cục
const GlobalStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <GlobalContext.Provider value={{ count, incrementCount, decrementCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Component con sử dụng trạng thái toàn cục
const Counter = () => {
  const { count, incrementCount, decrementCount } = useContext(GlobalContext);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

// Component gốc của ứng dụng
const App = () => {
  return (
    <GlobalStateProvider>
      <Counter />
    </GlobalStateProvider>
  );
};

export default App;
Trong ví dụ trên,   tạo một Context bằng cách sử dụng createContext(). Trạng thái toàn cục được quản lý trong component GlobalStateProvider, trong đó   sử dụng useState() để khởi tạo trạng thái count và các hàm incrementCount và decrementCount để cập nhật trạng thái.

Component Counter sử dụng useContext() để truy cập trạng thái và các hàm từ Context. Nó hiển thị giá trị của count và cung cấp các nút để tăng và giảm giá trị của count.

Trong component gốc App,   bao bọc Counter trong GlobalStateProvider để cung cấp trạng thái toàn cục cho Counter và bất kỳ component con nào khác trong ứng dụng.


Các trạng thái này cùng nhau giúp quản lý và điều khiển dữ liệu, hiển thị và hoạt động của các component trong ứng dụng React.


*CÁC LỖI THƯỜNG GẶP KHI SỬ DỤNG TRẠNG THÁI

1. Lỗi không cập nhật trạng thái: Đây là lỗi khi không cập nhật trạng thái một cách đúng đắn. Khi trạng thái không được cập nhật, các component sẽ không hiển thị đúng dữ liệu mới và gây ra lỗi trong ứng dụng.

- Ví dụ
jsx
 
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Lỗi: Không cập nhật trạng thái count
    // Khi nhấn nút tăng, giá trị hiển thị không thay đổi
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

- Cách Sửa: Sử dụng hàm setCount để cập nhật trạng thái count.

jsx
 
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // Sửa: Cập nhật trạng thái count bằng cách tăng giá trị hiện tại lên 1
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};
- Giải thích: Trong ví dụ trên, lỗi đã được sửa bằng cách sử dụng hàm setCount để cập nhật trạng thái count. Khi nhấn vào nút "Increase", giá trị count sẽ được tăng lên và hiển thị đúng trong component Counter.

2. Lỗi xung đột trạng thái: Khi sử dụng nhiều trạng thái trong một component hoặc giữa các component khác nhau, có thể xảy ra xung đột trạng thái. Điều này có thể dẫn đến việc hiển thị không chính xác hoặc hành vi không mong muốn của ứng dụng.
- Ví dụ:
jsx
 
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Counter />
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};
Trong ví dụ trên, hai component Counter và App đều sử dụng trạng thái count. Tuy nhiên, khi chúng được sử dụng cùng nhau, có thể xảy ra xung đột trạng thái, khiến hiển thị không chính xác hoặc hành vi không mong muốn của ứng dụng.

- Cách Sửa: Sử dụng các trạng thái độc lập cho mỗi component.

jsx
 
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Counter /> {/* Sử dụng component Counter độc lập */}
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};
- Giải thích: Trong ví dụ trên, lỗi đã được sửa bằng cách sử dụng các trạng thái độc lập cho mỗi component. Giờ đây, hai component Counter và App có thể sử dụng trạng thái count một cách riêng biệt mà không gây xung đột trạng thái.

3. Lỗi quá trình render: Khi trạng thái thay đổi quá nhanh hoặc quá thường xuyên, có thể xảy ra lỗi trong quá trình render. Điều này có thể gây ra hiệu ứng đuối (flickering) hoặc làm chậm hiệu năng của ứng dụng.
- Ví dụ:
jsx
 
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  setInterval(increment, 100); // Cập nhật trạng thái mỗi 100ms

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
- Giải thích: Trong ví dụ trên, trạng thái count được cập nhật mỗi 100ms thông qua hàm setInterval. Điều này dẫn đến quá trình render xảy ra quá nhanh và liên tục, gây ra hiệu ứng đuối (flickering) và làm chậm hiệu năng của ứng dụng.

- Cách Sửa: Sử dụng useEffect để cập nhật trạng thái theo thời gian nhất định.

jsx
 
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);

    return () => {
      clearInterval(interval); // Hủy bỏ interval khi component unmount
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
- Giải thích: Trong ví dụ trên, sử dụng useEffect để cập nhật trạng thái count mỗi 100ms. Hàm setInterval được gọi trong useEffect và được hủy bỏ khi component unmount. Điều này đảm bảo rằng quá trình render diễn ra một cách hiệu quả và tránh hiệu ứng đuối (flickering) cũng như làm chậm hiệu năng của ứng dụng.

4. Lỗi thiếu khởi tạo trạng thái ban đầu: Khi sử dụng useState hook, quên khởi tạo trạng thái ban đầu có thể gây ra lỗi hoặc dẫn đến lỗi undefined khi truy cập vào trạng thái.
- Ví dụ:

jsx
 
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState();

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
- Giải thích: Trong ví dụ trên, trạng thái count không được khởi tạo ban đầu trong useState hook. Khi nhấn vào nút Increment, hàm increment sẽ cố gắng tăng giá trị của count, nhưng do trạng thái ban đầu không được định nghĩa, nên kết quả là undefined và gây ra lỗi khi truy cập vào trạng thái.

- Cách Sửa: Khởi tạo trạng thái ban đầu cho useState hook.

jsx
 
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
- Giải thích: Trong ví dụ sửa đổi, trạng thái count được khởi tạo ban đầu là 0 trong useState hook. Khi nhấn vào nút Increment, giá trị của count được tăng lên một đơn vị một cách chính xác. Việc khởi tạo trạng thái ban đầu giúp tránh lỗi undefined và đảm bảo hoạt động đúng đắn của ứng dụng.

5. Lỗi truyền sai props: Khi sử dụng props để truyền dữ liệu giữa các component, có thể xảy ra lỗi khi truyền sai tên props hoặc giá trị không phù hợp. Điều này có thể gây ra lỗi hiển thị không đúng hoặc không chính xác.
- Ví dụ:
jsx
 
import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

const App = () => {
  return <Greeting username="John" />;
};
- Giải thích: Trong ví dụ trên, trong component Greeting, chúng   mong đợi nhận props là "name" để hiển thị thông báo chào mừng. Tuy nhiên, trong component App, chúng   truyền props là "username" thay vì "name". Điều này dẫn đến việc props không được truyền đúng và khiến cho hiển thị không đúng hoặc không chính xác.

- Cách Sửa: Truyền đúng tên props và giá trị phù hợp.

jsx
 
import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

const App = () => {
  return <Greeting name="John" />;
};
- Giải thích: Trong ví dụ sửa đổi, chúng   đã sửa lại props trong component App và truyền props "name" với giá trị "John" cho component Greeting. Bằng cách này, props được truyền đúng tên và giá trị phù hợp, và thông báo chào mừng sẽ hiển thị chính xác. Việc truyền đúng props đảm bảo rằng dữ liệu được truyền đúng và hiển thị đúng trong ứng dụng.

Để tránh những lỗi này, quan trọng để đảm bảo rằng cập nhật và quản lý trạng thái một cách chính xác, kiểm tra xem trạng thái được khởi tạo đúng cách, và đảm bảo rằng props được truyền và sử dụng một cách chính xác giữa các component.
