// Exe1
var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email",
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
};

var getError = function (field) {
    if (errors[field]) {
        for (var key in errors[field]) {
            return errors[field][key];
        }
    }
    return `${field} isn't exist`;
};
console.log(getError("name"));
console.log(getError("email"));
console.log(getError("hacker"));
// EXE2

const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
// Sort customer
customers.sort(function (a, b) {
    return a.age - b.age;
});
// create Constructor
var Customer = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
};
// Create function
var createCustomers = function (customers) {
    const res = customers.map(function (customer) {
        const customerName = customer.name.split(" ");
        var shortName = `${customerName[0]} ${
            customerName[customerName.length - 1]
        }`;
        return {
            ...customer,
            shortName,
        };
    });
    return res;
};
const result = createCustomers(customers);
console.log(result);

// EXE3
var User = function (name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
};
const registerUsers = [];
var register = function (name, password, email) {
    if (!name || !password || !email) {
        console.log("Please enter info!");
    }
    const newUser = new User(name, password, email);
    newUser.role = "user";
    registerUsers[registerUsers.length] = newUser;
    console.log("Register successful");
    return newUser;
};

var login = function (email, password) {
    const result = registerUsers.find(function (user) {
        if (user.email === email && user.password === password) {
            return true;
        }
    });
    if (result) {
        console.log("Login succesful");
        return result;
    } else {
        console.log("Email or password is incorrect");
        return null;
    }
};

register("Chinh", "1234", "doanchinhit21@gmail.com");
register("Minh", "12345", "minhdb@gmail.com");
login("minhdb@gmail.com", "12345");
