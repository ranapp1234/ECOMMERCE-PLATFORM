<%@ page import = "java.sql.*%>
<%
String Username = request.getParameter("Username");
String email = request.getParameter("email");
String Password = request.getParameter("password");
String confirmpassword = request.getParameter("confirmpassword");
try{
    class.forName("com.mysql.jdbc.driver");
    connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/test","rana", "ratna3350@rana");
    PreparedStatements ps = conn.prepareStatement("insert into register(Username, email, password,confirmpassword )");
    ps.setString(1,Username);
    ps.setString(2,email);
    ps.setString(3,password);
    ps.setString(4,confirmpassword);
   
  int x = ps.executeUpdate();
  if( x> 0){
    out.println("registration done successfully....");
  }else{
    out.println("registration Failed....")
  }
}catch(Exception e){
    out.println(e);
}
%>