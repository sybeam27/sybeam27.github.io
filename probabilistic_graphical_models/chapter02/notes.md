## Chapter 2: Foundations
이 chapter의 목적은 해당 분야의 포괄적인 개요를 제공하려는 것이 아니라,
책의 나머지 부분을 이해하는 데 필요한 핵심 아이디어의 최소한의 집합을 소개하는 것이다.

확률 이론, 정보 이론, 그리고 그래프 이론의 핵심 개념과 관련된 중요한 배경 지식을 다룬다.

----

### 2.1 확률 이론(Probability Theory)
이 책의 주요 초점은 복잡한 확률 분포(complex probability distributions)에 있으며, 다음은 확률 이론의 기본 개념을 복습하는 내용이다.

#### 2.1.1 확률 분포(Probability Distributions)
**확률**은 불확실한 사건이 일어날 가능성에 대한 신뢰의 정도(degree of confidence)를 의미한다. 이는 특정 사건이 일어날 가능성에 대한 수치적 표현이다.

**확률 이론**은 이러한 불확실한 사건들에 대한 추정치를 어떻게 정의하고 계산할 것인지에 대한 형식적 근거와 그들이 따라야 할 수학적 규칙을 다루는 학문이다.

##### 2.1.1.1 사건 공간(Event Spaces)
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

##### 2.1.1.2 확률 분포(Probability Distributions)
확률분포 $P$ 는 사건 공간 $(\Omega, S)$ 위에서 정의되는 함수로, 사건 $\alpha \in S$ 를 실수 값으로 대응시키며 다음의 조건들을 만족한다.
- 각 사건의 확률: $P(\alpha) \ge 0 \quad \forall \alpha \in S$
- 전체 사건의 확률: $P(\Omega) = 1$
- 배타적 사건의 확률: 만약 $\alpha, \beta \in S$ 이고 $\alpha \cap \beta = \emptyset$ 이면 $P(\alpha \cup \beta) = P(\alpha) + P(\beta)$

이 세 조건은 다른 여러 중요한 성질을 내포하며 다음이 성립한다.
$P(\emptyset) = 0, \quad P(\alpha \cup \beta) = P(\alpha) + P(\beta) - P(\alpha \cap \beta)$

##### 2.1.1.3 확률 해석(Interpretations of Probability)
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

#### 2.1.2 Basic Concepts in Probability
##### 2.1.2.1 조건부 확률(Conditional Probability)
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


##### 2.1.2.2 연쇄 법칙/베이즈 법칙(Chain Rule and Bayes Rule)
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

#### 2.1.3 Random Variables and Joint Distributions
##### 2.1.3.1 Motivation
##### 2.1.3.2 What Is a Random Variable?
##### 2.1.3.3 Marginal and Joint Distributions
##### 2.1.3.4 Conditional Probability

--

#### 2.1.4 Independence and Conditional Independence
##### 2.1.4.1 Independece
##### 2.1.4.2 Conditional Independence
##### 2.1.4.3 Independence of Random Variables

--

#### 2.1.5 Querying a Distribution
##### 2.1.5.1 Probability Queries
##### 2.1.5.2 MAP Queries
##### 2.1.5.3 Marginal MAP Queries

--

#### 2.1.6 Continous Spaces
##### 2.1.6.1 Probability Density Functions
##### 2.1.6.2 Joint Density Functions
##### 2.1.6.3 Conditional Density Functions

--

#### 2.1.7 Expectation and Variance
##### 2.1.7.1 Expectation
##### 2.1.7.2 Variance

--