import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader bufferedReader = 								//BufferedReader: 효율적으로 입력을 읽기 위해 사용되는 클래스
				new BufferedReader(new InputStreamReader(System.in));   //InputStreamReader: 바이트 스트림(InputStream)을 문자 스트림(Reader)으로 변환해주는 클래스
		// 사용자가 입력한 한 줄의 문자열을 읽어서 StringTokenizer 객체를 사용해 단어(토큰)로 나누는 작업
		StringTokenizer stringTokenizer =								//StringTokenizer: 문자열을 여러 개의 토큰(단어)으로 분리하는 클래스
				new StringTokenizer(bufferedReader.readLine());			//bufferedReader.readLine(): 사용자로부터 한 줄의 입력을 읽어오는 메서드
		int suNo = Integer.parseInt(stringTokenizer.nextToken());		//stringTokenizer.nextToken(): 다음 토큰(단어)을 반환하는 메서드
		int quizNo = Integer.parseInt(stringTokenizer.nextToken());		//StringTokenizer를 사용해 나눠진 토큰 중 첫 번째 토큰을 가져와서 이를 정수(int)로 변환하여 suNo 변수에 저장
		
		long[] S = new long[suNo+1];
		
		stringTokenizer = new StringTokenizer(bufferedReader.readLine());
		for(int i = 1; i <= suNo; i++) {
			S[i] = S[i - 1] + Integer.parseInt(stringTokenizer.nextToken());
		}
		
		for(int q = 0; q < quizNo; q++) {
			stringTokenizer = new StringTokenizer(bufferedReader.readLine());
			int i = Integer.parseInt(stringTokenizer.nextToken());
			int j = Integer.parseInt(stringTokenizer.nextToken());
			System.out.println(S[j] - S[i-1]);
		}
	}
}