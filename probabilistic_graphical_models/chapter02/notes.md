## Chapter 2: Foundations
이 chapter의 목적은 해당 분야의 포괄적인 개요를 제공하려는 것이 아니라,
책의 나머지 부분을 이해하는 데 필요한 핵심 아이디어의 최소한의 집합을 소개하는 것이다.

확률 이론, 정보 이론, 그리고 그래프 이론의 핵심 개념과 관련된 중요한 배경 지식을 다룬다.

----

## 2.1 확률 이론(Probability Theory)
이 책의 주요 초점은 복잡한 확률 분포(complex probability distributions)에 있으며, 다음은 확률 이론의 기본 개념을 복습하는 내용이다.

### 2.1.1 확률 분포(Probability Distributions)
**확률**은 불확실한 사건이 일어날 가능성에 대한 신뢰의 정도(degree of confidence)를 의미한다. 이는 특정 사건이 일어날 가능성에 대한 수치적 표현이다.

**확률 이론**은 이러한 불확실한 사건들에 대한 추정치를 어떻게 정의하고 계산할 것인지에 대한 형식적 근거와 그들이 따라야 할 수학적 규칙을 다루는 학문이다.

#### **2.1.1.1 사건 공간(Event Spaces)**
확률을 정의하기 전에 확률을 부여할 사건(event)이 무엇인지 정의해야 한다.  
형식적으로, 사건을 정의하기 위해 **가능한 결과들의 공간**이 존재한다고 가정하며, 이 공간을 Ω로 표기한다.  
예를 들어, 주사위를 생각해보면 가능한 모든 결과는 $Ω = \{1, 2, 3, 4, 5, 6\}$ 이 될 수 있다.  

확률을 부여할 수 있는 사건들의 집합을 정의해야 하며, 이를 **측정 가능한 사건(measurable events)** 의 집합 S로 나타낸다. 
즉, 각 사건 $\alpha$는 $\omega$의 부분집합이다.
- 주사위의 경우, 사건 `{6}` 은 “주사위가 6이 나오는 경우”를 의미한다.  
- 사건 `{1, 3, 5}` 는 “홀수가 나오는 경우”를 의미한다.  

확률론에서 사건 공간이 되기 위해서는 다음의 세 가지 기본 속성을 만족해야 한다.
1. 공집합과 전체집합을 포함해야 한다.  
2. 합집합(Union)에 대해 닫혀 있어야 한다. 즉, $\alpha, \beta \in S$ 이면 $\alpha \cup \beta \in S$ 여야 한다.  
3. 여집합(Complement)에 대해 닫혀 있어야 한다. 즉, $\alpha \in S$ 이면 $Ω - \alpha \in S$ 여야 한다.

이러한 두 번째와 세 번째 조건을 만족하면, 사건 공간은 자동으로 교집합(Intersection)과 차집합(Set Difference)같은 다른 boolean 연산에 대해서도 닫혀 있게 된다.

#### **2.1.1.2 확률 분포(Probability Distributions)**
확률분포 $P$ 는 사건 공간 $(\Omega, S)$ 위에서 정의되는 함수로, 사건 $\alpha \in S$ 를 실수 값으로 대응시키며 다음의 조건들을 만족한다.
- 각 사건의 확률: $P(\alpha) \ge 0 \quad \forall \alpha \in S$
- 전체 사건의 확률: $P(\Omega) = 1$
- 배타적 사건의 확률: 만약 $\alpha, \beta \in S$ 이고 $\alpha \cap \beta = \emptyset$ 이면 $P(\alpha \cup \beta) = P(\alpha) + P(\beta)$

이 세 조건은 다른 여러 중요한 성질을 내포하며 다음이 성립한다.
$P(\emptyset) = 0, \quad P(\alpha \cup \beta) = P(\alpha) + P(\beta) - P(\alpha \cap \beta)$

#### **2.1.1.3 확률 해석(Interpretations of Probability)**
확률에 어떤 의미를 부여할 수 있는지 살펴볼 수 있다.  
직관적으로, 어떤 사건 $\alpha$ 의 확률 $P(\alpha)$ 는 그 사건이 일어날 것이라는 확신의 정도를 나타낸다. 만약 $P(\alpha) = 1$ 이라면, 우리는 그 사건이 반드시 일어난다고 확신하고, $P(\alpha) = 0$ 이라면, 그 사건은 불가능하다고 간주한다.  

하지만 이 설명만으로는 확률 값이 실제로 무엇을 의미하는지 명확하지 않으며, 일반적으로 확률에는 두 가지 대표적인 해석이 존재한다.
- **빈도주의적 해석(Frequentist Interpretation)**  
    빈도주의 해석에서는 확률을 **사건의 발생 빈도(frequency)** 로 본다. 즉, 동일한 실험을 무한히 반복할 수 있다고 가정할 때, 어떤 사건이 발생하는 비율이 그 사건의 확률이다.
    
    빈도주의 해석은 물리적으로 반복 가능한 실험에서는 직관적이고 검증 가능하다. (ex. 주사위, 동전 던지기 등) 
    그러나 “내일 오후에 비가 올 확률은 0.3이다” 같은 문장에는 이 해석이 적합하지 않다. “내일 오후”라는 사건은 단 한 번만 발생하므로 반복 실험의 개념이 적용되지 않는다. 

- **주관주의적 해석(Subjective Interpretation)**  
    주관주의적 해석에서는 확률을 **개인의 믿음의 정도(degree of belief)** 로 본다.  
    즉, $P(\alpha) = 0.3$ 이라면, 그 사건 $\alpha$ 가 일어날 것이라는 개인의 주관적 신뢰도가 0.3임을 의미한다.
    
    “내일 오후에 비가 올 확률은 50%이다”라는 문장은 “비가 올 가능성과 오지 않을 가능성이 동일하다”고 믿는다는 뜻이다. 
    이때 내일 오후는 단 한 번뿐이지만 여전히 불확실성을 수치화하여 표현할 수 있다.

하지만 개인의 “믿음의 정도”는 임의로 정할 수 없다. 예를 들어, “부시가 이길 확률이 0.6이고, 질 확률이 0.8이다”라고 말한다면 모순이다.  
이 문제를 해결하기 위해 **베팅 게임(betting game)** 개념이 등장한다.
어떤 내기를 수용할 의사가 있는가로 그 사람의 믿음의 일관성을 수치화하는 것이다.

결국, 합리적인 사람이라면 확률의 규칙을 따르는 믿음 체계를 가져야 한다는 결론에 도달한다. 만약 그렇지 않다면, 일정한 손해를 보는 베팅 조합을 피할 수 없기 때문이다.

이 책에서는 확률을 다룰 때 두 해석 중 어느 하나를 명시하지 않는다. 두 해석 모두 동일한 수학적 규칙을 따르기 때문이다.  
즉, 빈도주의와 주관주의는 철학적 접근이 다를 뿐, 확률의 수학적 정의와 계산법에는 동일하게 적용된다.

----

### 2.1.2 Basic Concepts in Probability
#### 2.1.2.1 조건부 확률(Conditional Probability)
구체적인 예를 들어서, 어떤 과목을 수강하는 학생들의 모집단에 대한 확률분포를 고려한다고 하자. 이 경우 가능한 결과의 공간은 단순히 “모든 학생들의 집합”이다.

이제 학생들의 지능과 최종 성적에 대해 추론하고 싶다고 하자.  
사건 $\alpha$ 는 “A 학점을 받은 학생들”을, 사건 $\beta$ 는 “지능이 높은 학생들”을 나타낸다고 하자.  

이때 우리는 분포를 통해 각 사건의 확률 $P(\alpha)$, $P(\beta)$,  
그리고 두 사건이 동시에 일어나는 $P(\alpha \cap \beta)$ 를 계산할 수 있다.  
하지만 이것만으로 새로운 정보를 얻었을 때 기존의 믿음을 어떻게 갱신할지(update our beliefs)를 알 수는 없다.
- 예를 들어, “어떤 학생이 A 학점을 받았다”는 사실을 알게 되었다면,  
그 학생의 지능에 대해 무엇을 추론할 수 있을까?

즉, “사건 $\alpha$ 가 참임을 알게 되었을 때, 사건 $\beta$ 가 일어날 확률은 어떻게 바뀌는가?”  
이것이 바로 **조건부 확률(Conditional Probability)** 의 개념이다.

- 조건부 확률의 **정의**
    사건 $\alpha$ 가 주어졌을 때, 사건 $\beta$ 의 조건부 확률은 다음과 같이 정의된다.
    $$
    P(\beta \mid \alpha) = \frac{P(\alpha \cap \beta)}{P(\alpha)}
    $$

    즉, “$\alpha$ 가 일어났을 때 $\beta$ 가 일어날 확률"은 “$\alpha$ 를 만족하는 결과 중에서 $\beta$ 도 만족하는 결과의 비율”로 정의된다. 단, $P(\alpha) = 0$ 인 경우 조건부 확률은 정의되지 않는다.


- 조건부 확률 **성질**
    조건부 확률은 확률분포 조건을 만족한다. 
    즉, 어떤 사건 $\alpha$ 가 주어졌을 때 정의된 조건부 확률 $P(\cdot \mid \alpha)$ 자체가 하나의 완전한 확률분포로 간주될 수 있다.  

    따라서, 조건부 확률은 하나의 분포를 입력받아, 같은 확률 공간 위에서 또 다른 분포를 반환하는 연산자로 볼 수 있다.


#### 2.1.2.2 연쇄 법칙/베이즈 법칙(Chain Rule and Bayes Rule)
조건부 확률의 정의로부터 다음 관계를 즉시 얻을 수 있다.
$P(\alpha \cap \beta) = P(\alpha) P(\beta \mid \alpha)$

이 식은 **조건부 확률의 연쇄 법칙(Chain Rule)** 으로 불린다.  
더 일반적으로, 사건 $\alpha_1, \alpha_2, ..., \alpha_k$ 가 있을 때 다음이 성립한다.
$P(\alpha_1 \cap \alpha_2 \cap ... \cap \alpha_k) = P(\alpha_1) P(\alpha_2 \mid \alpha_1) \cdots P(\alpha_k \mid \alpha_1 \cap ... \cap \alpha_{k-1})$

즉, 여러 사건이 동시에 일어날 확률을 첫 번째 사건의 확률, 두 번째 사건이 첫 번째 사건이 일어난 후 일어날 확률, 그 이후의 조건부 확률들로 표현할 수 있다. 이 식은 사건들의 순서를 바꿔도 동일한 결과를 얻는다.

- 베이즈 법칙 (Bayes’ Rule)
    조건부 확률의 정의에서 또 하나의 중요한 결과는 **베이즈 법칙**이다.
    $P(\alpha \mid \beta) = \frac{P(\beta \mid \alpha) P(\alpha)}{P(\beta)}$

    모든 확률이 어떤 배경 사건 $\gamma$ 에 조건부로 주어졌을 때도 다음이 성립한다.
    $P(\alpha \mid \beta \cap \gamma)
    = \frac{P(\beta \mid \alpha \cap \gamma) P(\alpha \mid \gamma)}{P(\beta \mid \gamma)}$

    베이즈 법칙의 핵심은,  
    우리가 직접 구하기 어려운 **$P(\alpha \mid \beta)$** 를  
    더 쉽게 계산 가능한 **“역조건 확률” $P(\beta \mid \alpha)$** 로부터 구할 수 있게 해준다는 점이다.


- Example 2.1
    학생 모집단에서,  
    - $\text{Smart}$ = “지능이 높은 학생들”  
    - $\text{GradeA}$ = “A 학점을 받은 학생들”  
    이라 하자.

    이전 통계에 따라 다음과 같은 정보를 알고 있다:
    $P(\text{GradeA} \mid \text{Smart}) = 0.6$
    즉, 지능이 높은 학생이 A 학점을 받을 확률은 0.6이다.  
    이제 특정 학생이 A 학점을 받았다는 사실을 알게 되었다면,  
    그 학생이 똑똑할 확률은 얼마일까? -> 반대로 생각해야 함!

    베이즈 법칙에 따라 다음과 같이 계산된다.
    $P(\text{Smart} \mid \text{GradeA}) = \frac{P(\text{GradeA} \mid \text{Smart}) P(\text{Smart})}{P(\text{GradeA})}$

    예를 들어,
    - $P(\text{Smart}) = 0.3$  
    - $P(\text{GradeA}) = 0.2$  
    $P(\text{Smart} \mid \text{GradeA}) = \frac{0.6 \times 0.3}{0.2} = 0.9$

    즉, A 학점을 받은 학생이 똑똑할 확률은 90%로 매우 높다.  
    하지만 만약 시험이 쉬워서 A 학점을 받은 학생이 많다면  
    ($P(\text{GradeA}) = 0.4$), 다음과 같이 된다.
    $P(\text{Smart} \mid \text{GradeA}) = \frac{0.6 \times 0.3}{0.4} = 0.45$

    이 경우, A 학점만으로는 학생이 똑똑하다고 결론 내리기 어려우며, **사건의 사전확률(prior probability)**의 중요성을 보여준다.


베이즈 법칙은 의료 진단, 스팸 탐지, 신용 평가 등 현대 AI와 데이터 과학의 핵심적 도구이다.  
예를 들어, 질병 진단에서 테스트 결과가 양성일 때 실제로 질병이 존재할 확률을 베이즈 법칙을 통해 계산할 수 있으며, 이는 단순한 직관적 확률이 아닌, 사전 확률과 조건부 관계를 반영한 **합리적 추론(rational inference)** 이라고 할 수 있다.

----

### 2.1.3 Random Variables and Joint Distributions
#### 2.1.3.1 Motivation
계속 이야기해온 확률분포는 사건을 중심으로 정의되었다.  
형식적으로, 확률이 정의되는 대상은 측정 가능한 사건(measurable events)의 집합에 속하는 임의의 사건으로, 사건은 결과의 집합으로 기술된다. 
하지만 실제 문제에서는 결과 자체보다 **결과의 속성(attribute)** 에 초점을 두는 것이 더 자연스럽다.  

- Example: 학생 성적 분포  
    이전에 살펴본 학생 모집단의 예시에서 학생의 지능, 최종 성적 등과 같은 속성에 대해 추론하고자 한다.  

    이전 접근에서는 $\text{GradeA}$ 를 “A 학점을 받은 학생들의 집합”으로 정의하고, 이를 이용해 사건 $P(\text{GradeA})$ 를 표현했다.  

    하지만 만약 B 학점, C 학점 등 여러 등급을 동시에 고려해야 한다면, 각각을 별도의 사건으로 정의해야 하므로 수식이 매우 복잡해진다. 이러한 비효율을 피하기 위해 보다 깔끔하고 수학적인 표현 방식이 필요하다.

이 문제를 해결하기 위해 사용하는 개념이 **확률변수(Random Variable)** 이다.   
확률변수는 결과(outcome)의 **속성을 수치나 기호로 표현하는 함수**이다. 
즉, 확률변수는 “결과의 어떤 속성값을 보고하는 도구”라고 할 수 있다. 

$\text{Grade}$: 학생의 최종 성적을 나타내는 확률변수라 하면, $
P(\text{Grade} = A)$는 “A 학점을 받은 학생일 확률”을 의미하며, 이는 이전 표기 $P(\text{GradeA})$ 와 동일하다.

따라서, 확률변수는 사건을 속성 기반으로 더 체계적이고 수학적으로 표현할 수 있게 해주며, 복잡한 확률 공간을 **속성 중심(attribute-centered)** 으로 다룰 수 있는 강력한 도구가 된다.

#### 2.1.3.2 What Is a Random Variable?
확률변수는 결과 공간 Ω의 각 결과에 하나의 값을 대응시키는 함수로 정의되며, 확률변수의 유형은 다음과 같다.

- **이산형 확률변수 (Categorical/Discrete Random Variable)**: 한정된 개수의 값을 가짐 (예: {A, B, C}, {true, false})
- **연속형 확률변수 (Continuous Random Variable)**: 무한한 값(예: 실수, 키, 체중 등)을 가짐

확률변수 X가 가질 수 있는 모든 값의 집합을 $\text{Val}(X)$로 표기한다.
- 대문자 $X, Y, Z$ : 확률변수(Random Variables)  
- 소문자 $x, y, z$ : 해당 변수의 값(Value of Random Variable)  
    예) “$P(X=x) \ge 0$ for all $x \in \text{Val}(X)$”
- $x_1, ..., x_k$: 확률변수 X가 취할 수 있는 k개의 가능한 값  
  예를 들어, $\sum_{i=1}^{k} P(X = x_i) = 1$

확률분포의 예시는 다음과 같다.
- **다항분포 (Multinomial Distribution)**: 여러 범주형 값에 대한 확률분포  
- **베르누이 분포 (Bernoulli Distribution)**: 이진 변수 ($\text{Val}(X)=\{\text{false},\text{true}\}$)의 확률분포  
  - $x_1$: true  
  - $x_0$: false

##### 표기 정리
- 확률변수는 “결과를 수학적으로 표현하는 함수”  
- 이산형과 연속형으로 구분됨  
- $P(X=x)$ 형태로 확률분포와 함께 사용됨  

- **굵은 문자(예: $\mathbf{X}, \mathbf{Y}$)** 는 확률변수의 집합을 의미함  
- **소문자 굵은 문자(예: $\mathbf{x}, \mathbf{y}$)** 는 각 변수 집합의 값에 대한 assignment을 의미함  
- $x \in \text{Val}(X)$  
- $x\langle Y \rangle$: $x$가 집합 $Y$에 속한 변수들에 대해 갖는 값만 추출  
- 두 할당 $x, y$가 공통 변수에 대해 동일할 때 $x \sim y$ 로 표기  
  $x\langle X \cap Y \rangle = y\langle X \cap Y \rangle$
- $P(X=x)$ 대신 $P(x)$ 로 간단히 표기 가능 (변수가 명확할 때)
- 모든 가능한 값에 대해 합산할 때는 $\sum_x P(x) = 1$
- 복수 변수의 결합 확률은 $P((X=x) \cap (Y=y)) = P(X=x, Y=y) = P(x, y)$

#### 2.1.3.3 주변 확률분포/결합 확률분포(Marginal and Joint Distributions)
확률변수 $X$가 정의되면, $X$로 표현되는 사건들에 대한 분포를 고려할 수 있다. 이 분포를 **주변 확률분포(marginal distribution)** 라고 하며, 보통 $P(X)$로 표기한다.

- **주변 확률분포 (Marginal Distribution)**  
    확률변수 **Intelligence** 에 대해 다음과 같은 확률이 주어진다고 하자.   
    $P(\text{Intelligence} = \text{high}) = 0.3, \quad P(\text{Intelligence} = \text{low}) = 0.7$  
    이는 “학생의 지능 수준”이라는 단일 변수에 대한 확률분포로, 그 자체로 완전한 확률분포(모든 확률의 합이 1)를 이룬다.

    마찬가지로, 확률변수 **Grade** 에 대해서도 다음과 같은 주변 확률분포를 정의할 수 있다.  
    $P(\text{Grade} = A) = 0.25, \quad  
    P(\text{Grade} = B) = 0.37, \quad  
    P(\text{Grade} = C) = 0.38 $

    즉, 주변 확률분포는 “한 변수에 대한 확률 분포”이며, 전체 확률 공간에서 해당 변수와 관련된 사건만 고려한다.

- **결합 확률분포 (Joint Distribution)**  
    실제 문제에서는 여러 변수 간의 관계가 중요하다. 예를 들어, “지능이 높고(Intelligence=high) 성적이 A인(Grade=A) 학생”의 확률을 구하고 싶을 때, 이를 위해서는 결합 확률분포를 사용한다.
    
    결합 분포는 여러 확률변수의 조합에 대한 확률을 나타내며, 보통 다음과 같이 표현된다. $P(X_1, X_2, \dots, X_n)$  
    여기서 $\xi \in \text{Val}(X)$ 는 각 변수들의 전체 값 assignment을 의미한다.

- **주변화 관계 (Marginalization)**  
    결합 확률분포와 주변 확률분포는 서로 일관성을 유지해야 한다. 
    즉, 주변 확률분포는 결합 분포에서 다른 변수들을 “합쳐서(summing out)” 얻을 수 있다.  
    $P(x) = \sum_y P(x, y)$

    이는 그림 2.1에서 행 또는 열 기준으로 확률을 합산하는 형태로 표현된다. 이렇게 합산된 결과가 표의 “margins(가장자리)”에 표시되기 때문에 주변 확률분포라 부른다.  
    각 셀은 결합 확률 $P(\text{Intelligence}, \text{Grade})$ 를 나타내고 각 행 또는 열을 더한 값이 주변 확률 $P(\text{Grade})$, $P(\text{Intelligence})$ 가 된다.
  $$

결론적으로, 이후의 논의에서는 더 이상 원래의 결과 공간 $\Omega$ 를 명시적으로 다루지 않고, 각 변수들의 가능한 조합(예: Intelligence, Grade)에 기반한 **정규화된 결과 공간(canonical outcome space)** 에서 확률을 다루게 된다.

#### 2.1.3.4 조건부 확률(Conditional Probability)
조건부 확률의 개념은 확률변수에 대한 유도 분포(induced distribution)로 확장된다.   
$P(\text{Intelligence} \mid \text{Grade} = A)$는 “학생의 성적이 A임을 알았을 때, 지능 수준에 대한 조건부 확률분포”를 의미한다.

이때 조건부 확률분포는 주변 확률분포와 다르다.  
- $P(\text{Intelligence} = \text{high}) = 0.3$  
- $P(\text{Intelligence} = \text{high} \mid \text{Grade} = A) = \frac{0.18}{0.25} = 0.72$

즉, 성적이 A라는 정보를 얻은 후의 확률은 기존 사전 확률(prior)과 다르다.  
- **주변 확률(P(Intelligence))**: 학생에 대해 아무 정보가 없을 때의 일반적 믿음  
- **조건부 확률(P(Intelligence | Grade=A))**: 특정 정보를 알고 난 후의 업데이트된 믿음

##### 표기 정리
보통 $P(X \mid Y)$ 는 Y의 값이 주어졌을 때 X의 확률분포 전체를 의미한다. 즉, Y의 각 값에 대해 X의 모든 가능한 값에 대한 확률이 정의된다.

이 표기법을 이용하면 연쇄 법칙을 간단히 쓸 수 있다: $P(X, Y) = P(X) P(Y \mid X)$  
이를 다수의 변수로 확장하면, $P(X_1, X_2, ..., X_k) = P(X_1) P(X_2 \mid X_1) \cdots P(X_k \mid X_1, ..., X_{k-1})$

다음과 같이 베이즈 정리를 얻을 수 있다: $P(X \mid Y) = \frac{P(X) P(Y \mid X)}{P(Y)}$  
이는 “원인에 대한 사전 확률(prior)”과 “관찰된 결과에 대한 우도(likelihood)”를 결합하여 “관찰 후의 갱신된 확률(posterior)”을 계산하는 방식이다.

----

### 2.1.4 Independence and Conditional Independence
#### 2.1.4.1 Independece
#### 2.1.4.2 Conditional Independence
#### 2.1.4.3 Independence of Random Variables

----

### 2.1.5 Querying a Distribution
#### 2.1.5.1 Probability Queries
#### 2.1.5.2 MAP Queries
#### 2.1.5.3 Marginal MAP Queries

----

### 2.1.6 Continous Spaces
#### 2.1.6.1 Probability Density Functions
#### 2.1.6.2 Joint Density Functions
#### 2.1.6.3 Conditional Density Functions

----

### 2.1.7 Expectation and Variance
#### 2.1.7.1 Expectation
#### 2.1.7.2 Variance

----