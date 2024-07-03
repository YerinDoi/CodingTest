import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int N = sc.nextInt();
		int[] A = new int[N];
				
		for(int i = 0; i < A.length; i++) {
			A[i] = sc.nextInt();
		}
		
		long sum = 0; //조건문이나 반복문 안에서 변한 값을 밖에서도 유지해야 할 때
		long max = 0;
		for(int i = 0; i < N; i++) {
			if(max < A[i]) max = A[i];
			sum += A[i];
		}
		System.out.println(sum * 100.0 / N / max);
	}
}