import java.util.Scanner;
import java.util.Stack;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int N = sc.nextInt();
		int[] A = new int[N+1];
		for(int i = 1; i < N+1; i++) {
			A[i] = sc.nextInt();
		}
		
		StringBuffer sb = new StringBuffer();
		Stack<Integer> stack = new Stack<>();
		int num = 1;
		boolean result = true;
		
		for(int i = 1; i <= N; i++) {
			int su = A[i];
			if(num <= su) {
				while(num <= su) {
					stack.push(num++);
					sb.append("+\n");
				}
				stack.pop();
				sb.append("-\n");
			}
			else {
				int top = stack.pop();
				if(top > su) {
					System.out.println("NO");
					result = false;
					break;
				}
				else {
					sb.append("-\n");
				}
			}
		}
		if(result)System.out.println(sb.toString());
	}
}