// You are using Java
// 1.Area Of wall:

import java.util.*;
class Wall{
    int l,h;
    Wall(int a,int b){
        l=a;
        h=b;
    }
    int CalculateArea(){
        return (l*h);
    }
}
class main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int m=sc.nextInt();
        int a=sc.nextInt();
        int b=sc.nextInt();
        Wall w=new Wall(n,m);
        System.out.println("Area of Wall 1: "+w.CalculateArea());
        Wall w1=new Wall(a,b);
        System.out.println("Area of Wall 2: "+w1.CalculateArea());
    }
}

// 2.Salary Of N-Professors:

import java.util.*;
class Professor{
	int id,salary;
	String name;
	Professor()
	{ }
	Professor(int id,String name,int salary) {
		this.id=id;
		this.name=name;
		this.salary=salary;
	}
	public int getsal() {
		return salary;
	}
	public int getid() {
		return id;
	}
	public String getname() {
		return name;
	}
}
class Main{
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		Professor ob[];
		ob=new Professor[n];
		for(int i=0;i<n;i++) {
			String a;
			int b,c;
			b=sc.nextInt();
			a=sc.next();
			c=sc.nextInt();
			ob[i]=new Professor(b,a,c);
		}
		for(int i=0;i<n;i++) {
			if(ob[i].getsal()>=20000) {
				System.out.println(ob[i].getid()+" "+ob[i].getname()+" "+ob[i].getsal());
			}
		}
	}
}

// 3. Icecream vendor sum

import java.util.*;
class Icecream{
    public void Quantity(int r,int h){
        double pi=3.14;
        double ans=(0.33*pi*(r*r)*h);
        System.out.printf("%.2f",ans);
    }
    public void Quantity(double r){
        double ans1=(1.33*3.14*(r*r*r));
        System.out.printf("%.2f",ans1);
    }
}
class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        Icecream i=new Icecream();
        if(sc.hasNextInt()){
            int b=sc.nextInt();
            i.Quantity(a,b);
        }
        else
            i.Quantity(a);
    }
}

// 4. Application that calculates the salary of employees :

import java.util.Scanner;
class Employee{
	double salary,bonus;
	Employee(int a,int b) {
		salary=a;
		bonus=b;
	}
	double calculateSalary() {
		return salary+bonus;
	}
}
class Manager extends Employee{
	Manager(int a,int b) {
		super(a,b);
	}
	double calculateSalary() {
		return salary+bonus;
	}
}
class Engineer extends Employee{
	Engineer(int a,int b) {
		super(a,b);
	}
	double calculateSalary() {
		return salary+bonus;
	}
}
class Main{
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		String a=sc.nextLine();
		int s=sc.nextInt();
		int b=sc.nextInt();
		sc.nextLine();
		Employee obj=new Manager(s,b);
		System.out.println("Manager Salary: "+obj.calculateSalary());
		a=sc.nextLine();
		s=sc.nextInt();
		b=sc.nextInt();
		obj=new Engineer(s,b);
		System.out.println("Engineer Salary: "+obj.calculateSalary());
	}
}

// 5.Move ALl Special Character To End:

import java.util.*;
class demo{
    public static void move(String str){
        String x="";
        for(int i=0;i<str.length();i++){
            if(!Character.isLetter(str.charAt(i)) && !Character.isDigit(str.charAt(i))){
                x+=str.charAt(i);
            }
            else{
                System.out.print(str.charAt(i));
            }
        }
        System.out.print(x);
    }
}
class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        demo d=new demo();
        d.move(s);
    }
}

// 6. Online shopping portal:

import java.util.*;
class BasicCustomer{
    String a,b,d;
    int c,f;
    void set(String q,String w,int e,String r,int t){
        a=q;
        b=w;
        c=e;
        d=r;
        f=t;
    }
    void dis(){
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(f);
    }
    int cal(){
        if(f >=0 && f<= 4999)
            System.out.println(100);
        else if(f>=5000 && f<=7500)
            System.out.println(250);
        else if(f>=7500 && f<=10000)
            System.out.println(500);
        else if(f>=10000 && f<=20000)
            System.out.println(750);
        else if(f>=20000 && f<=30000)
            System.out.println(1000);
        else
            System.out.println(1500);
    return 0; 
    }
}
class PremiumCustomer extends BasicCustomer{
        @ Override int cal(){
        if(f>=0 && f<=4999)
            System.out.println(200);
        else if(f>=5000 && f<=7500)
            System.out.println(400);
        else if(f>=7500 && f<=10000)
            System.out.println(700);
        else if(f>=10000 && f<=20000)
            System.out.println(1000);
        else if(f>=20000 && f<=30000)
            System.out.println(1500);
        else
            System.out.println(2000);
        return 0;
        }
}
class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String a=sc.next();
        String b=sc.next();
        int c=sc.nextInt();
        String d=sc.next();
        int e=sc.nextInt();
        int f=sc.nextInt();
        int g=0;
        BasicCustomer be=new BasicCustomer();
        PremiumCustomer p=new PremiumCustomer();
        if(f==0){
            be.set(a,b,c,d,e);
            be.dis();
            be.cal();
        }
        else{
            g=sc.nextInt();
            p.set(a,b,c,d,e);
            p.dis();
            System.out.println(g);
            p.cal();
        }
    }
}

// 7. Add mul sub div of complex number:

import java.util.*;
import java.text.*;
abstract class Complex{
    abstract void calc();
}
class Addition extends Complex{
    public double r1;
    public double i1;
    public double r2;
    public double i2;
    Addition(double r1,double i1,double r2,double i2){
        this.r1=r1;
        this.i1=i1;
        this.r2=r2;
        this.i2=i2;
    }
    void calc(){
        double r_add=r1+r2;
        double i_add=i1+i2;
        DecimalFormat d=new DecimalFormat("0.0000");
        System.out.println("Addition:");
        if(i_add<0)
        System.out.println("\t"+d.format(r_add)+" "+d.format(i_add)+" i");
        else
        System.out.println("\t"+d.format(r_add)+" +"+d.format(i_add)+" i");
    }
}
class Subtraction extends Complex{
    public double r1;
    public double i1;
    public double r2;
    public double i2;
    Subtraction(double r1,double i1,double r2,double i2){
        this.r1=r1;
        this.i1=i1;
        this.r2=r2;
        this.i2=i2;
    }
    void calc(){
        double r_sub=r1-r2;
        double i_sub=i1-i2;
        DecimalFormat d=new DecimalFormat("0.0000");
        System.out.println("Subtraction:");
        if(i_sub<0)
        System.out.println("\t"+d.format(r_sub)+" "+d.format(i_sub)+" i");
        else
        System.out.println("\t"+d.format(r_sub)+" +"+d.format(i_sub)+" i");
    }
}
class Multiplication extends Complex{
    public double r1;
    public double i1;
    public double r2;
    public double i2;
    Multiplication(double r1,double i1,double r2,double i2){
        this.r1=r1;
        this.i1=i1;
        this.r2=r2;
        this.i2=i2;
    }
    void calc(){
        double r_mul=r1*r2 - i1*i2;
        double i_mul=r1*i2 + r2*i1;
        DecimalFormat d=new DecimalFormat("0.0000");
        System.out.println("Multiplication:");
        if(i_mul<0)
        System.out.println("\t"+d.format(r_mul)+" "+d.format(i_mul)+" i");
        else
        System.out.println("\t"+d.format(r_mul)+" +"+d.format(i_mul)+" i");
    }
}
class Division extends Complex{
    public double r1;
    public double i1;
    public double r2;
    public double i2;
    Division(double r1,double i1,double r2,double i2){
        this.r1=r1;
        this.i1=i1;
        this.r2=r2;
        this.i2=i2;
    }
    void calc(){
        double r_div=((r1*r2)+(i1*i2))/((r2*r2)+(i2*i2));
        double i_div=((i1*r2)-(r1*i2))/((r2*r2)+(i2*i2));
        DecimalFormat d=new DecimalFormat("0.0000");
        System.out.println("Division:");
        if(i_div<0)
        System.out.println("\t"+d.format(r_div)+" "+d.format(i_div)+" i");
        else if(((r1*r2)+(i2*i2))<=0)
        System.out.println("\t"+d.format(r_div)+" "+d.format(i_div)+" i");
        else
        System.out.println("\t"+d.format(r_div)+" +"+d.format(i_div)+" i");
    }
}
class Main{
    public static void main(String args[]){
        Scanner in=new Scanner(System.in);
        double r1=in.nextDouble();
        double i1=in.nextDouble();
        double r2=in.nextDouble();
        double i2=in.nextDouble();
        Addition a=new Addition(r1,i1,r2,i2);
        a.calc();
        Subtraction s=new Subtraction(r1,i1,r2,i2);
        s.calc();
        Multiplication m=new Multiplication(r1,i1,r2,i2);
        m.calc();
        Division d=new Division(r1,i1,r2,i2);
        d.calc();
    }
}

// 8. Sum of Elements in Odd and Even position:

import java.util.*;
interface Total{
    public void cal(int n,int a[]);
}
class Coin implements Total{
    public void cal(int n,int a[]){
        int b=0,c=0;
        if(n%2==0){
            for(int i=0;i<n;i++){
                if(i%2==0){
                    b+=a[i];
                }
                else{
                    c+=a[i];
                }
            }
            if(b>c){
                for(int i=0;i<n;i=i+2){
                    System.out.print(a[i]+" ");
                }
            }
            else{
                for(int i=1;i<n;i=i+2){
                    System.out.print(a[i]+" ");
                }
            }
        }
        else{
            System.out.print("Enter valid number");
        }
    }
}
class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int a[]=new int[n];
        for(int i=0;i<n;i++){
            a[i]=sc.nextInt();
        }
        Coin c=new Coin();
        c.cal(n,a);
    }
}

// 9.class named birds:

import java.util.*;
class Birds{
    Birds(){
        System.out.print("Birds : ");
    }
}
class Parrot extends Birds{
    Parrot(){
        System.out.println("Grey Parrot");
    }
}
class Cocktail extends Parrot{
    Cocktail(){
        System.out.println("Grey Cocoktail");
    }
}
class Kiwi extends Cocktail{
    Kiwi(){
        System.out.println("Grey Kiwi");
    }
}
class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        if(s.equals("Parrot")){
        Parrot p=new Parrot();
        }
        else if(s.equals("Cocktail")){
        Cocktail c=new Cocktail();
        }
        else{
        Kiwi k=new Kiwi();
        }
    }
}

// 10. Accept five element - remove final element:

import java.util.*;
class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        ArrayDeque<Integer> ad=new ArrayDeque<>();
        for(int i=0;i<5;i++)
            ad.add(sc.nextInt());
        ad.removeLast();
        Iterator it=ad.iterator();
        while(it.hasNext()){
            System.out.println(it.next());
        }
    }
}

// 11. Square modulus division operation:

import java.util.Scanner;
class Main{
	void calculate(int a) { 
		System.out.println("Square of "+a+": "+a*a); 
	}
	void calculate(int a,int b) { 
		System.out.println("Modulus of "+a+", "+b+": "+a%b); 
	}
	void calculate(Float a,Float b) { 
		System.out.println("Quotient of "+a+", "+b+": "+a/b); 
	}
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		Main obj=new Main();
		int a=sc.nextInt();
		int b=sc.nextInt();
		obj.calculate(a);
		obj.calculate(a,b);
		Float c=sc.nextFloat();
		Float d=sc.nextFloat();
		obj.calculate(c,d);
	}
}

// 12. Bank Balance sum:

import java.util.*;
abstract class Bank{
       public void getBalance(){}
}
class BankA extends Bank{
    void getBalance(int a){
        System.out.println("Deposited Balance is = "+a);
    }
}
class BankB extends Bank{
    void getBalance(int a){
        System.out.println("Deposited Balance is = "+a);
    }
}
class BankC extends Bank{
    void getBalance(int a){
        System.out.println("Deposited Balance is = "+a);
    }
}
class Main{
  public static void main(String[] args){
       int amt1,amt2,amt3;
       Scanner s =  new Scanner(System.in);
       amt1=s.nextInt();
       amt2=s.nextInt();
       amt3=s.nextInt();
       BankA Balance1 = new BankA();
       Balance1.getBalance(amt1);
       BankB Balance2 = new BankB();
       Balance2.getBalance(amt2);
       BankC Balance3 = new BankC();
       Balance3.getBalance(amt3);
   }
}


// Set 2:

// 13. Get below input from user and insert in in table and search the record(JDBC SUM):

import java.sql.*;
import java.util.Scanner;
class JDBCExample {
   static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
   static final String DB_URL = "jdbc:mysql://localhost/ri_db";
   static final String USER = "test";
   static final String PASS = "test123";
   public static void main(String[] args) {
   Connection conn = null;
   Connection myConn = null;
   Statement stmt = null;
   PreparedStatement st = null;
   try{
      Class.forName("com.mysql.jdbc.Driver");
      conn = DriverManager.getConnection(DB_URL, USER, PASS);
      stmt = conn.createStatement();
      String sql;
      Scanner sc =new Scanner(System.in);
      int n=Integer.parseInt(sc.nextLine());
      for(int i=0;i<n;i++) {
    	int sid =Integer.parseInt(sc.nextLine());
    	String sname =sc.nextLine();
    	String dname =sc.nextLine();
    	String address =sc.nextLine();
    	double gpa =Double.parseDouble(sc.nextLine());
        sql = "insert into BILL (sid,sname,dname,address,gpa) values(?,?,?,?,?)";
        st = conn.prepareStatement(sql);
        st.setInt(1, sid);
        st.setString(2, sname);
        st.setString(3, dname);
        st.setString(4, address);
        st.setDouble(5, gpa);
        st.execute();
      }
    String search = sc.nextLine();
     sql= "SELECT * FROM BILL Where DNAME='"+search+"'";
     ResultSet rs = stmt.executeQuery(sql);
     int count=0;
     while (rs.next()){
         count++;
        int sid = rs.getInt("SID");
        String sName = rs.getString("SNAME");
        String dName = rs.getString("DNAME");
        String address =    rs.getString("ADDRESS"); 
        double gpa =rs.getDouble("GPA");
        System.out.format("%s %s %s %s %s\n", sid, sName, dName, address,gpa);
      }
      if(count==0)
        System.out.println("No students in "+search+" department");
   }catch(SQLException se){
      se.printStackTrace();
   }catch(Exception e){

      e.printStackTrace();
   }finally{
      try{
         if(stmt!=null)
            conn.close();
      }catch(SQLException se){
      }
      try{
         if(conn!=null)
            conn.close();
      }catch(SQLException se){
         se.printStackTrace();
      }
   }
}
}

// 14. Display employee details with salary from 10000 to 50000(JDBC PROGRAM):

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Scanner;
 class Main {
	public static void main(String args[]) throws Exception{
		String url="jdbc:mysql://localhost/ri_db";
		String username ="test";
		String password ="test123";
		String query = "INSERT INTO OFFICE (EID,ENAME, ESALARY) VALUES (?,?,?);";
		Scanner sc =new Scanner(System.in);
		Class.forName("com.mysql.jdbc.Driver");
		Connection con = DriverManager.getConnection(url,username,password);
		PreparedStatement st = con.prepareStatement(query);
		int n =Integer.parseInt(sc.nextLine());
		for(int i=0;i<n;i++) {
			int eid=Integer.parseInt(sc.nextLine());
			String ename =sc.nextLine();
			int esalary = Integer.parseInt(sc.nextLine());
			st.setInt(1,eid);
			st.setString(2,ename);
			st.setInt(3,esalary);
			st.executeUpdate();
		}
		ResultSet rs =  st.executeQuery("select * from OFFICE where esalary between 10000 and 50000");
		while(rs.next()) {
			System.out.println(rs.getInt(1)+" "+rs.getString(2)+" "+rs.getInt(3));
		}
		st.close();
		con.close();
	}
}

// 15. ArrayList to String Array:

import java.util.*;
class main{
    public static void main(String args[]){
        Scanner in=new Scanner(System.in);
        ArrayList<String>al=new ArrayList<String>();
        int n=in.nextInt();
        for(int i=0;i<n;i++)
        al.add(in.next());
        String[] s=al.toArray(new String[n]);
        for(String k:s)
        System.out.println(k);
    }
}

// 16. LinkedListMain class:

import java.util.*;
class LinkedListMain{
    public static void main(String args[]){
        Scanner in=new Scanner(System.in);
        int n=Integer.parseInt(in.nextLine());
        LinkedList<String>list=new LinkedList<String>();
        for(int i=0;i<n;i++){
            list.add(in.nextLine());
        }
        int pos=Integer.parseInt(in.nextLine());
        list.remove(list.get(pos-1));
        for(String e:list){
            System.out.println(e);
        }
    }
}

// 17. validate email address:

// You are using Java
import java.util.Scanner;
import java.io.*;
class DotException extends Exception
{
    public DotException(String str) 
    {
        super(str);
    }
}
class AtTheRateException extends Exception
{
    public AtTheRateException(String str) 
    {
        super(str);
    }
}
class DomainException extends Exception
{
    public DomainException(String str) 
    {
        super(str);
    }
}
class Main
{
    public static void main(String args[])
    {
        Scanner scan = new Scanner(System.in);
        String str = scan.nextLine();
        
        try
        {
            int dot=0,atRate=0;
            for(int i=0;i<str.length();i++)
            {
                if(str.charAt(i)=='.')
                    dot++;
                if(str.charAt(i)=='@')
                    atRate++;
            }
            
            if(dot!=1)
            {
                throw new DotException("Invalid Dot usage");
            }
            if(atRate!=1)
            {
                throw new AtTheRateException("Invalid @ usage");
            }
            if(!(str.contains("in") || str.contains("com") || str.contains("net") || str.contains("biz")))
            {
                throw new DomainException("Invalid Domain");
            }
            System.out.print("Valid email address");
        }
        catch(DotException e)
        {
            System.out.print(e);
            System.out.print("\nInvalid email address");
        }
        catch(AtTheRateException e)
        {
            System.out.print(e);
            System.out.print("\nInvalid email address");
        }
        catch(DomainException e)
        {
            System.out.print(e);
            System.out.print("\nInvalid email address");
        }
    }
}

// 18. ArrayIndexOutOfBoundsException:

// You are using Java
import java.util.Scanner;
class Main
{
    public static void main(String args[])
    {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int arr[] = new int[n];
        for(int i=0;i<n;i++)
            arr[i] = scan.nextInt();
            
        int ind = scan.nextInt();
        try
        {
            System.out.println(arr[ind]);
        }
        catch(Exception e)
        {
            System.out.println("Array index out of bound.");
        }
        
        
        int a = scan.nextInt();
        int b = scan.nextInt();
        try
        {
            System.out.println(a/b);
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        
        
        String str = null;
        ind = scan.nextInt();
        System.out.println(str);
        try
        {
            System.out.println(str.charAt(ind));
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
    }
}

// 19. Eligible to vote:

import java.util.*;
class AgeException extends Exception {
    public AgeException(String message) {
        super(message);
    }
}
class VoteEligibilityChecker {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int age = sc.nextInt();
        try {
            checkEligibility(age);
        } catch (AgeException e) {
            System.out.println(e.getMessage());
        }
    }
    public static void checkEligibility(int age) throws AgeException {
        if (age < 18) {
            throw new AgeException("Not Eligible to vote\n"+"AgeException");
        } else {
            System.out.println("Eligible to vote");
        }
    }
}

// 20. Math Staff-Area of different shapes:

import java.util.*;
class Shape{
	int area,length,breadth;
	Shape(int area) {
		this.area=area;
	}
	Shape(int length,int breadth) {
		this.length=length;
		this.breadth=breadth;
	}
	public void getArea1() {
		System.out.println(area*area);
	}
	public void getArea2() {
		System.out.println(length*breadth);
	}
}
class Main{
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		int a=sc.nextInt();
		int l=sc.nextInt();
		int b=sc.nextInt();
		Shape s=new Shape(a);
		s.getArea1();
		Shape s1=new Shape(l,b);
		s1.getArea2();
	}
}


// 21.Frequency of letters sum:

import java.util.*;
class Mythread extends Thread{
    String str;
    static int n;
    public Mythread(String str){
        super();
        this.str=str;
    }
    public void run(){
        System.out.println();
        n=this.str.length();
        int [] freq=new int[26];
        for(int i=0;i<n;i++){
            freq[this.str.charAt(i)-'a']++;
        }
        for(int i=0;i<n;i++){
            if(freq[this.str.charAt(i)-'a']!=0){
                System.out.print(this.str.charAt(i));
                System.out.print(freq[this.str.charAt(i)-'a']);
                System.out.println();
                freq[this.str.charAt(i)-'a']=0;
            }
        }
    }
}
class main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt();
        for(int i=0;i<n;i++){
            Mythread obj = new Mythread(sc.next());
            Thread t=new Thread(obj);
            t.start();
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////
SWING IRC TRAINER FORM
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
public class TrainerFeedbackForm extends JFrame implements ActionListener {
 private JLabel question1Label, question2Label, question3Label, ratingLabel;
 private JRadioButton yes1, no1, yes2, no2, yes3, no3;
 private ButtonGroup group1, group2, group3;
 private JTextArea ratingTextArea;
 private JButton submitButton;
 public TrainerFeedbackForm() {
 setTitle("Trainer Feedback Form");
 setSize(400, 300);
 setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 question1Label = new JLabel("Were the contents delivered clearly by the trainer?");
 question2Label = new JLabel("Do the trainers clear all your doubts?");
 question3Label = new JLabel("Do the trainer is interactive?");
 ratingLabel = new JLabel("Rate the trainer on a scale of 1 to 10:");
 yes1 = new JRadioButton("Yes");
 no1 = new JRadioButton("No");
 group1 = new ButtonGroup();
 group1.add(yes1);
 group1.add(no1);
 yes2 = new JRadioButton("Yes");
 no2 = new JRadioButton("No");
 group2 = new ButtonGroup();
 group2.add(yes2);
 group2.add(no2);
 yes3 = new JRadioButton("Yes");
 no3 = new JRadioButton("No");
 group3 = new ButtonGroup();
 group3.add(yes3);
 group3.add(no3);
 ratingTextArea = new JTextArea(5, 20);
 ratingTextArea.setLineWrap(true);
 ratingTextArea.setWrapStyleWord(true);
 submitButton = new JButton("Submit");
 submitButton.addActionListener(this);
 JPanel panel = new JPanel();
 panel.setLayout(new GridLayout(7, 1));
 panel.add(question1Label);
 panel.add(yes1);
 panel.add(no1);
 panel.add(question2Label);
 panel.add(yes2); panel.add(no2);
 panel.add(question3Label);
 panel.add(yes3); panel.add(no3);
 panel.add(ratingLabel); panel.add(ratingTextArea);
 panel.add(submitButton);
 add(panel);
 setVisible(true);
 }
 @Override
 public void actionPerformed(ActionEvent e) {
 if (e.getSource() == submitButton) {
 // Get the selected options
 String answer1 = yes1.isSelected() ? "Yes" : "No";
 String answer2 = yes2.isSelected() ? "Yes" : "No";
 String answer3 = yes3.isSelected() ? "Yes" : "No";
 String rating = ratingTextArea.getText();
 // Display the feedback in a dialog
 String feedbackMessage = "Feedback:\n" +
 "Were the contents delivered clearly by the trainer? " + answer1 + "\n" +
 "Do the trainers clear all your doubts? " + answer2 + "\n" +
 "Do the trainer is interactive? " + answer3 + "\n" +
 "Rating: " + rating;
JOptionPane.showMessageDialog(this,feedbackMessage,"Feedback",JOptionPane.INFORMATION
_MESSAGE);
 }
 }
 public static void main(String[] args) {
 new TrainerFeedbackForm();
 }}
//////////////////////////////////////////////////////////////////////////////////////
SERVLET ADDITION OF TWO NUMBERS
<!DOCTYPE html>
<html>
<head>
 <title>Login Page</title>
</head>
<body>
 <h1>Login Page</h1>
 <form action=" LoginServlet " method="post">
 Name: <input type="text" name="name"><br>
 Password: <input type="password" name="password"><br>
 <input type=
"submit" value="Login">
 </form>
</body>
</html>
Implement the credential validation logic inside the doPost method.
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
@WebServlet("/LoginServlet")
public class GenericServletApp1 extends GenericServlet{
 public void service(ServletRequest request,ServletResponse response)throws
ServletException,IOException{
 response.setContentType("text/html");
 PrintWriter out=response.getWriter();
 String s1=request.getParameter("uname");
 String s2=request.getParameter("pass");
 out.println("<h1>"+s1+"</h1>");
 out.println("<h1>"+s2+"</h1>");
 out.println("<a href='index.html'>Back</a>");
 out.close();
 }
}
Configure the Servlet in web.xml:
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
 version="4.0">
 <servlet>
 <servlet-name>LoginServlet</servlet-name>
 <servlet-class>GenericServletApp1</servlet-class>
 </servlet>
 <servlet-mapping>
 <servlet-name>LoginServlet</servlet-name>
 <url-pattern>/LoginServlet</url-pattern>
 </servlet-mapping>
</web-app>
//////////////////////////////////////////////////////////////////////////////////////
SERVLET LOGIN PAGE USERNAME PASSWORD
<!DOCTYPE html>
<html>
<head>
 <title>Login Page</title>
</head>
<body>
 <h1>Login Page</h1>
 <form action=" LoginServlet " method="post">
 Name: <input type="text" name="name"><br>
 Password: <input type="password" name="password"><br>
 <input type=
"submit" value="Login">
 </form>
</body>
</html>
Implement the credential validation logic inside the doPost method.
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
@WebServlet("/LoginServlet")
public class GenericServletApp1 extends GenericServlet{
 public void service(ServletRequest request,ServletResponse response)throws
ServletException,IOException{
 response.setContentType("text/html");
 PrintWriter out=response.getWriter();
 String s1=request.getParameter("uname");
 String s2=request.getParameter("pass");
 out.println("<h1>"+s1+"</h1>");
 out.println("<h1>"+s2+"</h1>");
 out.println("<a href='index.html'>Back</a>");
 out.close();
 }
}
Configure the Servlet in web.xml:
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
 version="4.0">
 <servlet>
 <servlet-name>LoginServlet</servlet-name>
 <servlet-class>GenericServletApp1</servlet-class>
 </servlet>
 <servlet-mapping>
 <servlet-name>LoginServlet</servlet-name>
 <url-pattern>/LoginServlet</url-pattern>
 </servlet-mapping>
</web-app>
/////////////////////////////////////////////////////////////////////////////////////
SWING STUDENT FORM WELCOME MESSAGE
// You are using Java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
class StudentForm extends JFrame implements ActionListener {
 private JLabel nameLabel, regNoLabel, cgpaLabel, genderLabel;
 private JTextField nameField, regNoField, cgpaField;
 private JCheckBox maleCheckBox, femaleCheckBox;
 private JButton submitButton;
 public StudentForm() {
 setTitle("Student Information Form");
 setSize(400, 200);
 setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 nameLabel = new JLabel("Name:");
 regNoLabel = new JLabel("Reg No:");
 cgpaLabel = new JLabel("CGPA:");
 genderLabel = new JLabel("Gender:");
 nameField = new JTextField(20);
 regNoField = new JTextField(10);
 cgpaField = new JTextField(4);
 maleCheckBox = new JCheckBox("Male");
 femaleCheckBox = new JCheckBox("Female");
 submitButton = new JButton("Submit");
 submitButton.addActionListener(this);
 JPanel panel = new JPanel();
 panel.setLayout(new GridLayout(5, 2));
 panel.add(nameLabel);
 panel.add(nameField);
 panel.add(regNoLabel);
 panel.add(regNoField);
 panel.add(cgpaLabel);
 panel.add(cgpaField);
 panel.add(genderLabel);
 panel.add(maleCheckBox);
 panel.add(new JLabel()); // Empty label for spacing
 panel.add(femaleCheckBox);
 panel.add(submitButton);
 add(panel);
 setVisible(true);
 }
 @Override
 public void actionPerformed(ActionEvent e) {
 if (e.getSource() == submitButton) {
 String name = nameField.getText();
 String regNo = regNoField.getText();
 String cgpa = cgpaField.getText();
 String gender = "";
 if (maleCheckBox.isSelected()) {
 gender = "Male";
 }
 if (femaleCheckBox.isSelected()) {
 gender = "Female";
 }
 String message = "Welcome, " + name + "! Your Reg No is " + regNo + ", CGPA is " + cgpa
+ ", and you are a " + gender + ".";
 JOptionPane.showMessageDialog(this, message);
 }
 }
 public static void main(String[] args) {
 new StudentForm();
 }
}