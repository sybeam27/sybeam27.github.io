## Chapter 2: Foundations
이 chapter의 목적은 해당 분야의 포괄적인 개요를 제공하려는 것이 아니라,
책의 나머지 부분을 이해하는 데 필요한 핵심 아이디어의 최소한의 집합을 소개하는 것이다.

확률 이론, 정보 이론, 그리고 그래프 이론의 핵심 개념과 관련된 중요한 배경 지식을 다룬다.

----

### 2.1 확률 이론(Probability Theory)
이 책의 주요 초점은 복잡한 확률 분포(complex probability distributions)에 있으며, 다음은 확률 이론의 기본 개념을 복습하는 내용이다.

#### 2.1.1 확률 분포(Probability Distributions)
**확률**은 불확실한 사건이 일어날 가능성에 대한 신뢰의 정도(degree of confidence)를 의미한다.
이는 특정 사건이 일어날 가능성에 대한 *수치적 표현*이다.

**확률 이론**은 이러한 불확실한 사건들에 대한 추정치를 어떻게 정의하고 계산할 것인지에 대한 *형식적 근거(formal foundation)*와 그들이 따라야 할 *수학적 규칙*을 다루는 학문이다.

##### 2.1.1.1 사건 공간(Event Spaces)
확률을 정의하기 전에 확률을 부여할 사건(event)가 무엇인지 정의해야 한다.
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
확률분포 $P$ 는 사건 공간 $(\Omega, S)$ 위에서 정의되는 함수로,  
사건 $\alpha \in S$ 를 실수 값으로 대응시키며 다음의 조건들을 만족한다.
- 각 사건의 확률: $P(\alpha) \ge 0 \quad \forall \alpha \in S$
- 전체 사건의 확률: $P(\Omega) = 1$
- 배타적 사건의 확률: 만약 $\alpha, \beta \in S$ 이고 $\alpha \cap \beta = \emptyset$ 이면 $P(\alpha \cup \beta) = P(\alpha) + P(\beta)$

이 세 조건은 다른 여러 중요한 성질을 내포하며 다음이 성립한다.
$P(\emptyset) = 0, \quad P(\alpha \cup \beta) = P(\alpha) + P(\beta) - P(\alpha \cap \beta)$

##### 2.1.1.3 확률 해석(Interpretations of Probability)
확률에 어떤 의미를 부여할 수 있는지 살펴볼 수 있다.  
직관적으로, 어떤 사건 $\alpha$ 의 확률 $P(\alpha)$ 는 그 사건이 일어날 것이라는 확신의 정도를 나타낸다.  
만약 $P(\alpha) = 1$ 이라면, 우리는 그 사건이 반드시 일어난다고 확신하고, $P(\alpha) = 0$ 이라면, 그 사건은 불가능하다고 간주한다.  

하지만 이 설명만으로는 확률 값이 실제로 무엇을 의미하는지 명확하지 않다.  
일반적으로 확률에는 두 가지 대표적인 해석이 존재한다.
- 빈도주의적 해석(Frequentist Interpretation)
    빈도주의 해석에서는 확률을 **사건의 발생 빈도(frequency)** 로 본다. 즉, 동일한 실험을 무한히 반복할 수 있다고 가정할 때, 어떤 사건이 발생하는 비율이 그 사건의 확률이다.
    
    빈도주의 해석은 물리적으로 반복 가능한 실험에서는 직관적이고 검증 가능하다. (ex. 주사위, 동전 던지기 등) 
    그러나 “내일 오후에 비가 올 확률은 0.3이다” 같은 문장에는 이 해석이 적합하지 않다. “내일 오후”라는 사건은 단 한 번만 발생하므로 반복 실험의 개념이 적용되지 않는다. 

- 주관주의적 해석(Subjective Interpretation)
    주관주의적 해석에서는 확률을 **개인의 믿음의 정도(degree of belief)** 로 본다.  
    즉, $P(\alpha) = 0.3$ 이라면, 그 사건 $\alpha$ 가 일어날 것이라는 개인의 주관적 신뢰도가 0.3임을 의미한다.
    
    예를 들어, “내일 오후에 비가 올 확률은 50%이다”라는 문장은 “비가 올 가능성과 오지 않을 가능성이 동일하다”고 믿는다는 뜻이다. 
    이때 내일 오후는 단 한 번뿐이지만 여전히 불확실성을 수치화하여 표현할 수 있다.

하지만 개인의 “믿음의 정도”는 임의로 정할 수 없다.  
예를 들어, “부시가 이길 확률이 0.6이고, 질 확률이 0.8이다”라고 말한다면 모순이다. 이 문제를 해결하기 위해 **베팅 게임(betting game)** 개념이 등장한다.
어떤 내기를 수용할 의사가 있는가로 그 사람의 믿음의 일관성을 수치화하는 것이다.

결국, 합리적인 사람이라면 확률의 규칙을 따르는 믿음 체계를 가져야 한다는 결론에 도달한다. 만약 그렇지 않다면, 일정한 손해를 보는 베팅 조합을 피할 수 없기 때문이다.

이 책에서는 확률을 다룰 때 두 해석 중 어느 하나를 명시하지 않는다.  
왜냐하면 두 해석 모두 동일한 수학적 규칙을 따르기 때문이다.  
즉, 빈도주의와 주관주의는 철학적 접근이 다를 뿐, 확률의 수학적 정의와 계산법에는 동일하게 적용된다.

#### 2.1.2 Basic Concepts in Probability
##### 2.1.2.1 Conditional Probability
##### 2.1.2.2 Chain Rule and Bayes Rule

--

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