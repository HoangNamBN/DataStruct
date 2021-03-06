function TreeNode(value) 
{
  this.value = value;
  this.children = [];
}

function BinarySearchTree() 
{
  this._root = null;
}

BinarySearchTree.prototype.insert = function (value) 
{
  var thisNode = { left: null, right: null, value: value };
  if (!this._root) 
  {                                           
    this._root = thisNode;                                     
  } 
  else 
  {                                                            
    var currentRoot = this._root;
    while (true) 
    {
      if (currentRoot.value.id > value.id) 
      {
        if (currentRoot.left != null) 
        {
          currentRoot = currentRoot.left;
        } 
        else 
        {
          currentRoot.left = thisNode;
          break;
        }
      } 
      else if (currentRoot.value.id < value.id) 
      {
        if (currentRoot.right != null) 
        {
          currentRoot = currentRoot.right;
        } 
        else 
        {
          currentRoot.right = thisNode;
          break;
        }
      } 
      else 
      {
        break;
      }
    }
  }
};
BinarySearchTree.prototype.insertGia = function (value) {
  var thisNode = { left: null, right: null, value: value };
  if (!this._root) {
    this._root = thisNode;
  } else {
    var currentRoot = this._root;
    while (true) {
      if (currentRoot.value.gia > value.gia) {
        if (currentRoot.left != null) {
          currentRoot = currentRoot.left;
        } else {
          currentRoot.left = thisNode;
          break;
        }
      } else if (currentRoot.value.gia < value.gia) {
        if (currentRoot.right != null) {
          currentRoot = currentRoot.right;
        } else {
          currentRoot.right = thisNode;
          break;
        }
      } else {
        break;
      }
    }
  }
};
BinarySearchTree.prototype.insertTen = function (value) {
  var thisNode = { left: null, right: null, value: value };
  if (!this._root) {
    this._root = thisNode;
  } else {
    var currentRoot = this._root;
    while (true) {
      if (currentRoot.value.name > value.name) {
        if (currentRoot.left != null) {
          currentRoot = currentRoot.left;
        } else {
          currentRoot.left = thisNode;
          break;
        }
      } else if (currentRoot.value.name < value.name) {
        if (currentRoot.right != null) {
          currentRoot = currentRoot.right;
        } else {
          currentRoot.right = thisNode;
          break;
        }
      } else {
        break;
      }
    }
  }
};
BinarySearchTree.prototype.remove = function (value) 
{
  return deleteRecursively(this._root, value);

  function deleteRecursively(root, value) 
  {
    if (!root) 
    {
      return null;
    } 
    else if (value < root.value.id) 
    {
      root.left = deleteRecursively(root.left, value);
    } 
    else if (value > root.value.id) 
    {
      root.right = deleteRecursively(root.right, value);
    } 
    else 
    {
      if (!root.left) 
      {
        root = root.right;
        return root;
      } 
      else if (!root.right) 
      {
        root = root.left;
        return root;
      } 
      else 
      {
        var temp = findMin(root.right);
        root.value.id = temp.value.id;
        root.right = deleteRecursively(root.right, temp.value.id);
        return root;
      }
    }
    return root;
  }

  function findMin(root) 
  {
    while (root.left) 
    {
      root = root.left;
    }
    return root;
  }
};

BinarySearchTree.prototype.findNode = function (value) 
{
  var currentRoot = this._root,
    found = false;

  while (currentRoot) 
  {
    if (currentRoot.value.id > value) 
    {
      currentRoot = currentRoot.left;
    } 
    else if (currentRoot.value.id < value) 
    {
      currentRoot = currentRoot.right;
    } 
    else 
    {
      found = true;
      console.log(found);
      console.log(currentRoot.value);
      document.getElementById("result").innerHTML = "K???t qu??? t??m ki???m:";
      document.getElementById("resultSearchId").innerHTML ="M?? S???n Ph???m :"+ " " + currentRoot.value.id;
      document.getElementById("resultSearchName").innerHTML ="T??n S???n Ph???m :"+" " + currentRoot.value.name;
      document.getElementById("resultSearchGia").innerHTML ="Gi?? B??n :"+ " " +   currentRoot.value.gia;
      document.getElementById("resultSearchGn").innerHTML ="Gi?? Nh???p :"+  " " +  currentRoot.value.giaNhap;
      document.getElementById("resultSearchloai").innerHTML ="Lo???i S???n Ph???m :"+ " " +  currentRoot.value.loai;
      document.getElementById("resultSearchNsx").innerHTML ="N??i S???n Xu???t :"+ " " +   currentRoot.value.nsx;
      break;
    }
  }
  return found;
};

var sp = [
  {
    id: 02,
    name: "R?????u JACK DANIEL'S SINGLE BARREL",
    gia: 1800000,
    giaNhap: 1500000,
    loai: "????? u???ng",
    nsx: "USA",
  },
  {
    id: 01,
    name: "S???a Chua",
    gia: 6000,
    giaNhap: 4000,
    loai: "????? ??n",
    nsx: "Vi???t Nam",
  },
  {
    id: 04,
    name: "M?? Cay H??n Qu???c",
    gia: 45000,
    giaNhap: 30000,
    loai: "????? ??n",
    nsx: "Korea",
  },
  {
    id: 03,
    name: "Cocacola",
    gia: 10000,
    giaNhap: 8000,
    loai: "????? u???ng",
    nsx: "Vi???t Nam",
  },
  {
    id: 05,
    name: "B??nh Macaron",
    gia: 70000,
    giaNhap: 60000,
    loai: "????? ??n",
    nsx: "Pari",
  },
  {
    id: 06,
    name: "????i g?? chi??n gi??n",
    gia: 50000,
    giaNhap: 30000,
    loai: "????? ??n",
    nsx: "Vi???t Nam",
  },

  {
    id: 08,
    name: "Bia S??i G??n",
    gia: 110000,
    giaNhap: 90000,
    loai: "????? u???ng",
    nsx: "Vi???t Nam",
  },

  {
    id: 11,
    name: "Ch??n G?? Cay",
    gia: 35000,
    giaNhap: 30000,
    loai: "????? ??n v???t",
    nsx: "China",
  },
  {
    id: 13,
    name: "B??nh Quy",
    gia: 55000,
    giaNhap: 45000,
    loai: "????? ??n",
    nsx: "Vi???t Nam",
  },
];

BinarySearchTree.prototype.leftToRight = function () 
{
  var current = this._root,
    s = [],
    sl = 0,
    t = 0,
    done = false;
  while (!done) {
    if (current != null) 
    {
      s.push(current);
      current = current.left;
    } 
    else {
      if (s.length) 
      {
        current = s.pop();
        console.log(current.value);
        sl = sl + 1;
        t = t + parseInt(current.value.gia);
        document.getElementById("sl").innerHTML = sl;
        document.getElementById("t").innerHTML = t +"VND" ;
        document.getElementById("list").innerHTML += `
        <tr>
          <th scope="row">${current.value.id}</th>
          <td>${current.value.name}</td>
          <td>${current.value.gia}VND</td>
          <td>${current.value.giaNhap}VND</td>
          <td>${current.value.loai}</td>
          <td>${current.value.nsx}</td>
        </tr>
      `;
        current = current.right;
      } 
      else 
      {
        done = true;
      }
    }
  }
};

BinarySearchTree.prototype.rightToLeft = function () 
{
  var current = this._root,
    s = [],
    sl = 0,
    t = 0,
    done = false;
  while (!done) 
  {
    if (current != null) 
    {
      s.push(current);
      current = current.right;
    } 
    else 
    {
      if (s.length) 
      {
        current = s.pop();
        console.log(current.value);
        sl = sl + 1;
        t = t + parseInt(current.value.gia);
        document.getElementById("sl").innerHTML = sl;
        document.getElementById("t").innerHTML = t +"VND";
        document.getElementById("list").innerHTML += `
        <tr>
          <th scope="row">${current.value.id}</th>
          <td>${current.value.name}</td>
          <td>${current.value.gia}VND</td>
          <td>${current.value.giaNhap}VND</td>
          <td>${current.value.loai}</td>
          <td>${current.value.nsx}</td>
        </tr>
      `;
        current = current.left;
      } 
      else 
      {
        done = true;
      }
    }
  }
};

var bst1 = new BinarySearchTree();

//sort id---->
sp.map((item, idx) => {
  bst1.insert(item);
});
bst1.leftToRight();
sortIdReduction = () => {
  document.getElementById("list").innerHTML = null;
  bst1.rightToLeft();
};
sortIdIncrease = () => {
  document.getElementById("list").innerHTML = null;
  bst1.leftToRight();
};
//sort name---->,
sortNameIncrease = () => {
  document.getElementById("list").innerHTML = null;
  var bst1 = new BinarySearchTree();
  sp.map((item, idx) => {
    bst1.insertTen(sp[idx]);
  });
  bst1.leftToRight();
};

sortNameReduction = () => {
  document.getElementById("list").innerHTML = null;
  var bst1 = new BinarySearchTree();
  sp.map((item, idx) => {
    bst1.insertTen(sp[idx]);
  });
  bst1.rightToLeft();
};
//sort gia---->
sortGiaIncrease = () => {
  document.getElementById("list").innerHTML = null;
  var bst1 = new BinarySearchTree();
  sp.map((item, idx) => {
    bst1.insertGia(item);
  });
  bst1.leftToRight();
};
sortGiaReduction = () => {
  document.getElementById("list").innerHTML = null;
  var bst1 = new BinarySearchTree();
  sp.map((item, idx) => {
    bst1.insertGia(item);
  });
  bst1.rightToLeft();
};

search = () => {
  var x = document.getElementById("searchValue").value;
  bst1.findNode(x);
};
remove = () => {
  document.getElementById("list").innerHTML = null;
  var x = document.getElementById("inputRemove").value;
  bst1.remove(x);
  bst1.leftToRight();
};
addSp = () => {
  var x = document.getElementById("addValueid").value;
  var y = document.getElementById("addValueName").value;
  var z = document.getElementById("addValueGia").value;
  var b = document.getElementById("addValueGn").value;
  var c = document.getElementById("addValueloai").value;
  var a = document.getElementById("addValueNsx").value;
  document.getElementById("list").innerHTML = null;
  bst1.insert({ id: x, name: y, gia: z, giaNhap: b, loai: c, nsx: a });
  bst1.leftToRight();
};
